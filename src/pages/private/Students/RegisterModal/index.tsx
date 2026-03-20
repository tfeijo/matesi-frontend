import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Button from '../../../../components/Button';
import CourseCheckboxGroup from '../../../../components/CourseCheckboxGroup';
import DatePicker from '../../../../components/DatePicker';
import Input from '../../../../components/Input';
import api from '../../../../services/api';
import { StyledReactModal } from './styles';

//! TYPES
type TCourse = { id: string; name: string };
type TProfile = { id: string; name: string };

interface FormCourses {
  english: string;
  french: string;
  spanish: string;
  korean: string;
  german: string;
}

interface IFormData {
  first_name: string;
  last_name: string;
  birth_date: Date;
  cpf: string;
  email: string;
  phone: string;
  courses: FormCourses;
}

export type RegisterModalInitialData = Omit<IFormData, 'courses'> & {
  courses: Partial<FormCourses>;
  id: string;
};

interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  courses: TCourse[];
  studentProfile: TProfile;
  initialData?: RegisterModalInitialData;
  onRegisterForm?: () => void;
}

type TKey = keyof FormCourses;

StyledReactModal.setAppElement('#root');

const schema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, 'O nome deve possuir ao menos 3 letras.')
    .required('O nome é obrigatório.'),
  last_name: Yup.string()
    .min(3, 'O sobrenome deve possuir ao menos 3 letras.')
    .required('O sobrenome é obrigatório.'),
  cpf: Yup.string()
    .matches(/\d{11}/g, 'O cpf deve possuir 11 números.')
    .required('O cpf é obrigatório.'),
  email: Yup.string()
    .email('O email deve ser um email válido.')
    .required('O email é obrigatório.'),
  birth_date: Yup.mixed().required('A data de nascimento é obrigatória.'),
  phone: Yup.string()
    .matches(
      /^(?:(\d{2}))(?:((?:9\d|[2-9])\d{3})(\d{4}))$/g,
      'O telefone deve ser um número válido (DDD + número)',
    )
    .required('O telefone é obrigatório'),
});

//! HELPERS
function filterCoursesToArrayOfIds(courses: Partial<FormCourses>) {
  return Object.keys(courses)
    .map(key => courses[key as TKey])
    .filter(course => course);
}

//! COMPONENT
export default function RegisterModal({
  isOpen,
  onRequestClose,
  courses,
  studentProfile,
  initialData,
  onRegisterForm,
}: RegisterModalProps) {
  const [coursesError, setCoursesError] = useState('');

  const methods = useForm<IFormData>({
    resolver: yupResolver(schema),
    defaultValues: initialData as unknown as IFormData,
  });

  useEffect(() => {
    if (initialData) {
      methods.reset(initialData as unknown as IFormData);
    }
  }, [initialData, methods]);

  const onSubmit = async (data: IFormData) => {
    try {
      setCoursesError('');

      const selectedCourses = filterCoursesToArrayOfIds(data.courses);

      if (selectedCourses.length === 0) {
        setCoursesError('Ao menos um curso deve ser selecionado');
        return;
      }

      const formData = {
        first_name: data.first_name,
        last_name: data.last_name,
        birth_date: data.birth_date,
        cpf: data.cpf,
        email: data.email,
        phone: data.phone,
        courses_id: selectedCourses,
      };

      if (initialData) {
        const updatedDataAsArray = Object.keys(formData)
          .map(key => {
            if (key === 'courses_id') {
              const studentCourses = filterCoursesToArrayOfIds(
                initialData.courses,
              );
              const newCourses = formData.courses_id;

              if (JSON.stringify(newCourses) === JSON.stringify(studentCourses))
                return '';

              return { courses_id: newCourses };
            }

            const newData = formData[key as keyof typeof formData];
            if (newData !== initialData[key as keyof typeof initialData])
              return { [key]: newData };

            return '';
          })
          .filter(values => values);

        const updatedData = Object.assign({}, ...updatedDataAsArray);
        await api.put(`users/${initialData.id}`, updatedData);
        toast.success('Matricula atualizada com sucesso!');
      } else {
        await api.post(`users/${studentProfile.id}`, formData);
        toast.success('Matricula realizada com sucesso!');
      }

      setCoursesError('');

      if (!initialData) methods.reset();
      if (onRegisterForm) onRegisterForm();
      onRequestClose();
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(error.response.data.message);
        return;
      }

      toast.error('Um erro inesperado ocorreu. Por favor, tente novamente');
    }
  };

  return (
    <StyledReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="container">
        <Button
          iconOnly
          icon={MdClose}
          color="neutral"
          variant="ghost"
          className="close-modal"
          onClick={onRequestClose}
        />

        <h2>{initialData ? 'Atualizar' : 'Matricular'} aluno</h2>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="course-selection">
              <CourseCheckboxGroup courses={courses} />
              {coursesError && (
                <span className="courses-error">{coursesError}</span>
              )}
            </div>

            <Input label="Nome" name="first_name" />
            <Input label="Sobrenome" name="last_name" />
            <DatePicker
              containerClassName="date-picker"
              label="Data de nascimento"
              name="birth_date"
              maxDate={new Date()}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
            <Input label="CPF" name="cpf" />
            <Input label="E-mail" name="email" type="email" />
            <Input label="Telefone" name="phone" />

            <Button type="submit" block>
              {initialData ? 'Atualizar' : 'Efetuar'} matrícula
            </Button>
          </form>
        </FormProvider>
      </div>
      <div className="margin-bottom" />
    </StyledReactModal>
  );
}

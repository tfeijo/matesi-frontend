import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Button from '../../../../components/Button';
import CourseCheckboxGroup from '../../../../components/CourseCheckboxGroup';
import DatePicker from '../../../../components/DatePicker';
import Input from '../../../../components/Input';
import api from '../../../../services/api';
import { StyledReactModal } from './styles';

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

interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  courses: TCourse[];
  studentProfile: TProfile;
}

type TKey = keyof FormCourses;

StyledReactModal.setAppElement('#root');

export default function RegisterModal({
  isOpen,
  onRequestClose,
  courses,
  studentProfile,
}: RegisterModalProps) {
  const [coursesError, setCoursesError] = useState('');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = async data => {
    try {
      formRef.current?.setErrors({});
      setCoursesError('');

      const selectedCourses = Object.keys(data.courses)
        .map(key => data.courses[key as TKey])
        .filter(course => course);

      const formData = {
        first_name: data.first_name,
        last_name: data.last_name,
        birth_date: data.birth_date,
        cpf: data.cpf,
        email: data.email,
        phone: data.phone,
        courses_id: selectedCourses,
      };

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
        courses_id: Yup.array().min(
          1,
          'Ao menos um curso deve ser selecionado',
        ),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      await api.post(`users/${studentProfile.id}`, formData);

      toast.success('Matricula realizada com sucesso!');

      setCoursesError('');
      formRef.current?.setErrors({});
      formRef.current?.reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: Record<string, string> = {};

        error.inner.forEach(err => {
          if (err.path) validationErrors[err.path] = err.message;
        });
        formRef.current?.setErrors(validationErrors);
        if (validationErrors.courses_id) {
          setCoursesError(validationErrors.courses_id);
        }

        return;
      }

      if (error.response.status === 400) {
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

        <h2>Matricular aluno</h2>

        <Form ref={formRef} onSubmit={handleSubmit}>
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
            Efetuar matrícula
          </Button>
        </Form>
      </div>
      <div className="margin-bottom" />
    </StyledReactModal>
  );
}

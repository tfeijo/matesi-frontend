import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Button from '../../../../../components/Button';
import CourseCheckboxGroup from '../../../../../components/CourseCheckboxGroup';
import DatePicker from '../../../../../components/DatePicker';
import Input from '../../../../../components/Input';
import { useMailbox } from '../../../../../context/MailboxContext';
import api from '../../../../../services/api';

import { ConfirmMessageContainer } from './styles';

type TCourse = { id: string; name: string };
type TProfile = { id: string; name: string };

interface EnrollConfirmationFormProps {
  allCourses: TCourse[];
  studentProfile: TProfile;
}

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

type TKey = keyof FormCourses;

export const ConfirmationForm: React.FC<EnrollConfirmationFormProps> = ({
  allCourses,
  studentProfile,
}) => {
  const [coursesError, setCoursesError] = useState('');

  const formRef = useRef<FormHandles>(null);
  const { messages, selectedMessage, setActiveMessageState } = useMailbox();

  if (selectedMessage < 0) return null;
  const message = messages[selectedMessage];

  if (message.isConfirmed) return null;

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

      await api.post(`users/${studentProfile.id}`, {
        ...formData,
        registration_id: message.id,
      });

      setActiveMessageState({
        ...messages[selectedMessage],
        isConfirmed: true,
      });

      toast.success('Pré-matricula realizada com sucesso!');

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
        if (validationErrors.courses_id)
          setCoursesError(validationErrors.courses_id);

        return;
      }

      if (error.response.status === 400) {
        toast.error(error.response.data.message);
        return;
      }

      toast.error('Um erro inesperado ocorreu. Por favor, tente novamente');
    }
  };

  // ---
  const coursesSelected = message.courses?.map(course => {
    let data;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < allCourses.length; i++) {
      const option = allCourses[i];
      if (course.id === option.id) {
        switch (course.name) {
          case 'Inglês':
            data = { english: course.id };
            break;
          case 'Espanhol':
            data = { spanish: course.id };
            break;
          case 'Francês':
            data = { french: course.id };
            break;
          case 'Coreano':
            data = { korean: course.id };
            break;
          case 'Alemão':
            data = { german: course.id };
            break;
          default:
            break;
        }
      }
    }

    return { ...data } as { field: string; value: string };
  });

  let initialCourses;
  if (coursesSelected) initialCourses = Object.assign({}, ...coursesSelected);
  // ---

  return (
    <ConfirmMessageContainer>
      <h1>
        Matricular{' '}
        <span>
          {message.firstName} {message.lastName}
        </span>
      </h1>
      <p>Confirme os idiomas a matricular o aluno.</p>

      <Form
        key={Math.random()}
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={{
          courses: initialCourses,
          first_name: message.firstName,
          last_name: message.lastName,
          email: message.email,
          phone: message.phone,
        }}
      >
        <div className="course-selection">
          <CourseCheckboxGroup courses={allCourses} />
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

        <Button type="submit">Efetuar matrícula</Button>
      </Form>
    </ConfirmMessageContainer>
  );
};

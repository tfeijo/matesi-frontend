import { useCallback, useEffect, useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Button from '../../../components/Button';
import CourseCheckboxGroup from '../../../components/CourseCheckboxGroup';
import Input from '../../../components/Input';
import Loader from '../../../components/Loader';
import api from '../../../services/api';

import { Container, FailedLoadingResource } from './styles';
import ScrollToTop from '../../../components/ScrollToTop';

interface FormCourses {
  english: string;
  french: string;
  spanish: string;
  korean: string;
  german: string;
}

interface IFormData {
  name: string;
  email: string;
  phone: string;
  courses: FormCourses;
}

interface Course {
  id: string;
  name: string;
}

type TKey = keyof FormCourses;

const Enroll: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [coursesError, setCoursesError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    async function loadCourses() {
      try {
        const { data } = await api.get('courses');

        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadCourses();

    setIsLoading(false);
  }, []);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(async data => {
    try {
      formRef.current?.setErrors({});
      setCoursesError('');

      const selectedCourses = Object.keys(data.courses)
        .map(key => data.courses[key as TKey])
        .filter(course => course);

      const formData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        courses_id: selectedCourses,
      };

      const schema = Yup.object().shape({
        name: Yup.string()
          .min(3, 'O nome deve possuir ao menos 3 letras.')
          .required('O nome é obrigatório.'),
        email: Yup.string()
          .email('O email deve ser um email válido.')
          .required('O email é obrigatório.'),
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

      api.post('registration', formData);

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

      toast.error('Um erro inesperado ocorreu. Por favor, tente novamente');
    }
  }, []);

  if (isLoading) return <Loader size={48} style={{ height: '50vh' }} />;

  if (!courses)
    return (
      <FailedLoadingResource>
        <h1>
          Não foi possível carregar os recursos necessários. Por favor, tente
          novamente.
        </h1>
      </FailedLoadingResource>
    );

  return (
    <Container>
      <ScrollToTop />
      <h1>Venha estudar conosco</h1>

      <p>
        Faça sua pré-matrícula para os cursos de seu interesse e aguarde o nosso
        contato para confirmação
      </p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="course-selection">
          <h2>Clique no(s) idioma(s) que deseja cursar</h2>
          {courses && <CourseCheckboxGroup courses={courses} />}
          {coursesError && (
            <span className="courses-error">{coursesError}</span>
          )}
        </div>
        <Input label="Nome" name="name" />
        <Input type="email" label="E-mail" name="email" />
        <Input label="Telefone" name="phone" />

        <Button block type="submit">
          Concluir pré-matrícula
        </Button>
      </Form>
    </Container>
  );
};

export default Enroll;

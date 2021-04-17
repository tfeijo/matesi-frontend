import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';

import Button from '../../../components/Button';
import CourseCheckboxGroup from '../../../components/CourseCheckboxGroup';
import Input from '../../../components/Input';
import { Container } from './styles';

interface IFormData {
  name: string;
  email: string;
  phone: string;
}

const Enroll: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <h1>Venha estudar conosco</h1>

      <p>
        Faça sua pré-matrícula para os cursos de seu interesse e aguarde o nosso
        contato para confirmação
      </p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="course-selection">
          <h2>Clique no(s) idioma(s) que deseja cursar</h2>
          <CourseCheckboxGroup />
        </div>
        <Input label="Nome" name="name" />
        <Input label="E-mail" name="email" />
        <Input label="Telefone" name="phone" />

        <Button block type="submit">
          Concluir pré-matrícula
        </Button>
      </Form>
    </Container>
  );
};

export default Enroll;

import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Container } from './styles';

interface IFormData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  about_me: string;
}

const WorkingUs: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <h1>Quer trabalhar conosco?</h1>

      <p>
        Envie-nos o seu currículo com o cargo desejado no assunto e entraremos
        em contato com você quando abrir-mos vagas.
      </p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input label="Nome" name="name" />
        <Input label="E-mail" name="email" />
        <Input label="Telefone" name="phone" />
        <Input label="LinkedIn" name="linkedin" />
        <Input
          label="Conte um pouco sobre você e como pode nos ajudar"
          multiline
          rows={4}
          name="about_me"
        />

        <Button block type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default WorkingUs;

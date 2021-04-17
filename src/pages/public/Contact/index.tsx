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
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <h1>Tem alguma dúvida?</h1>

      <p>
        Vamos conversar! Preencha os campos abaixo com suas dúvidas para
        entrarmos em contato com você.
      </p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input label="Nome" name="name" />
        <Input label="E-mail" name="email" />
        <Input label="Telefone" name="phone" />
        <Input label="Assunto" name="subject" />
        <Input label="Mensagem" multiline rows={4} name="message" />

        <Button block type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;

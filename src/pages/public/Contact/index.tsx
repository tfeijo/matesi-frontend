import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';
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

  const handleSubmit: SubmitHandler<IFormData> = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

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
        subject: Yup.string().required('O assunto é obrigatório'),
        message: Yup.string().required('A mensagem é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('questions', data);

      toast.success(
        'Mensagem enviada com sucesso! Em breve entraremos em contato.',
      );

      formRef.current?.setErrors({});
      formRef.current?.reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: Record<string, string> = {};

        error.inner.forEach(err => {
          if (err.path) validationErrors[err.path] = err.message;
        });
        formRef.current?.setErrors(validationErrors);
      } else {
        toast.error('Um erro inesperado ocorreu. Por favor, tente novamente.');
      }
    }
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
        <Input type="email" label="E-mail" name="email" />
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

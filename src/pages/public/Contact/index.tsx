import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import api from '../../../services/api';
import { Container } from './styles';

interface IFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const schema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, 'O nome deve possuir ao menos 3 letras.')
    .required('O nome é obrigatório.'),
  last_name: Yup.string(),
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

const Contact: React.FC = () => {
  const methods = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = useCallback(
    async (data: IFormData) => {
      try {
        await api.post('questions', data);

        toast.success(
          'Mensagem enviada com sucesso! Em breve entraremos em contato.',
        );

        methods.reset();
      } catch (error) {
        toast.error('Um erro inesperado ocorreu. Por favor, tente novamente.');
      }
    },
    [methods],
  );

  return (
    <Container>
      <h1>Tem alguma dúvida?</h1>

      <p>
        Vamos conversar! Preencha os campos abaixo com suas dúvidas para
        entrarmos em contato com você.
      </p>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input label="Nome" name="first_name" />
          <Input label="Sobrenome" name="last_name" />
          <Input type="email" label="E-mail" name="email" />
          <Input label="Telefone" name="phone" />
          <Input label="Assunto" name="subject" />
          <Input label="Mensagem" multiline rows={4} name="message" />

          <Button block type="submit">
            Enviar
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};

export default Contact;

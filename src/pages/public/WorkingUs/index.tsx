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
  linkedin: string;
  about_me: string;
}

const schema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, 'O nome deve possuir ao menos 3 letras.')
    .required('O nome é obrigatório.'),
  last_name: Yup.string()
    .min(3, 'O sobrenome deve possuir ao menos 3 letras.')
    .required('O sobrenome é obrigatório.'),
  email: Yup.string()
    .email('O email deve ser um email válido.')
    .required('O email é obrigatório.'),
  phone: Yup.string()
    .matches(
      /^(?:(\d{2}))(?:((?:9\d|[2-9])\d{3})(\d{4}))$/g,
      'O telefone deve ser um número válido (DDD + número)',
    )
    .required('O telefone é obrigatório'),
  linkedin: Yup.string()
    .url('Endereço da página inválido')
    .required('O assunto é obrigatório'),
  about_me: Yup.string().required(
    'Por favor, conte-nos um pouco sobre você e como pode nos ajudar.',
  ),
});

const WorkingUs: React.FC = () => {
  const methods = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = useCallback(
    async (data: IFormData) => {
      try {
        await api.post('work_with_us', data);

        toast.success(
          'Currículo enviado com sucesso! Assim que houverem vagas disponíveis entraremos em contato.',
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
      <h1>Quer trabalhar conosco?</h1>

      <p>
        Envie-nos o seu currículo com o cargo desejado no assunto e entraremos
        em contato com você quando abrir-mos vagas.
      </p>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input label="Nome" name="first_name" />
          <Input label="Sobrenome" name="last_name" />
          <Input type="email" label="E-mail" name="email" />
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
        </form>
      </FormProvider>
    </Container>
  );
};

export default WorkingUs;

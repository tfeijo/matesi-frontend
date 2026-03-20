import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useAuth from '../../../hooks/useAuth';
import { Container } from './styles';

interface IFormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email('O email deve ser um email válido.')
    .required('O email é obrigatório.'),
  password: Yup.string()
    .min(3, 'A senha deve possuir no mínimo 6 dígitos.')
    .required('A senha é obrigatória.'),
});

const Login: React.FC = () => {
  const methods = useForm<IFormData>({ resolver: yupResolver(schema) });
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data: IFormData) => {
      try {
        await signIn(data);

        navigate('/mensagens/matriculas');
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
          return;
        }

        toast.error('Um erro inesperado ocorreu. Por favor, tente novamente');
      }
    },
    [navigate, signIn],
  );

  return (
    <Container>
      <h1>Bem-vindo de volta</h1>

      <p>Faça login com suas credenciais para acessar nossa plataforma.</p>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="E-mail"
            name="email"
            autoComplete="username"
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            autoComplete="current-password"
          />

          <Button block type="submit">
            Entrar
          </Button>

          <Button
            block
            variant="ghost"
            asLink
            to="#"
            onClick={() => window.alert('Função não disponível')}
          >
            Esqueci minha senha
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};

export default Login;

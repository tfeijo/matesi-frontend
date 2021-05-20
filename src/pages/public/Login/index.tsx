import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
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

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit: SubmitHandler<IFormData> = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('O email deve ser um email válido.')
            .required('O email é obrigatório.'),
          password: Yup.string()
            .min(3, 'A senha deve possuir no mínimo 6 dígitos.')
            .required('A senha é obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data);

        history.push('/mensagens/matriculas');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const validationErrors: Record<string, string> = {};

          error.inner.forEach(err => {
            if (err.path) validationErrors[err.path] = err.message;
          });
          formRef.current?.setErrors(validationErrors);
          return;
        }

        if (error.response) {
          toast.error(error.response.data.message);
          return;
        }

        toast.error('Um erro inesperado ocorreu. Por favor, tente novamente');
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <h1>Bem-vindo de volta</h1>

      <p>Faça login com suas credenciais para acessar nossa plataforma.</p>

      <Form ref={formRef} onSubmit={handleSubmit}>
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
      </Form>
    </Container>
  );
};

export default Login;

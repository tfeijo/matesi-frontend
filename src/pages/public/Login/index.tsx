import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Container } from './styles';

interface IFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <h1>Bem-vindo de volta</h1>

      <p>Faça login com suas credenciais para acessar nossa plataforma.</p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input label="E-mail" name="email" />
        <Input label="Senha" type="password" name="password" />

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

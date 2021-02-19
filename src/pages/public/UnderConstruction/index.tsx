import React from 'react';
import logoBlack from '../../../assets/logo-black.svg';
import underConstruction from '../../../assets/under-construction.svg';

import { Container, Content, Logo, Illustration } from './styles';

const UnderConstruction: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={logoBlack} alt="MATESI Idiomas" />
        <h1>Site em construção</h1>
        <h2>Venha para a a MATESI idiomas, sua passagem para o sucesso</h2>
        <p>
          Ensinamos idiomas com foco comunicativo e cultural a partir dos 13
          anos.
        </p>
      </Content>

      <Illustration>
        <img src={underConstruction} alt="Em construção" />
      </Illustration>
    </Container>
  );
};

export default UnderConstruction;

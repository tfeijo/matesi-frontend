import { useState } from 'react';
import talitaImg from '../../../assets/about/talita.png';
import vivianeImg from '../../../assets/about/viviane.png';
import anaBeatrizImg from '../../../assets/about/ana-beatriz.png';

import { Container, Hero, Team, Member } from './styles';

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(1);

  return (
    <Container>
      <Hero>
        <div className="message">
          <h1>Nossa história</h1>
          <p>
            Olá, nos somos a <strong>Matesi</strong>, uma escola feita com muito
            amor e carinho nascida de uma <strong>paixão</strong> pela estudo e
            ensino de idiomas.
          </p>

          <small>Clique nas imagens para conhecer as histórias</small>
        </div>

        <Team>
          <Member isSelected={selectedMember === 1}>
            <img src={talitaImg} alt="Talita" />
            <div className="legend">
              <p>Talita</p>
              <div className="animate-job">
                <span>Fundadora e Diretora</span>
              </div>
            </div>
            <button
              type="button"
              className="trigger"
              onClick={() => setSelectedMember(1)}
            >
              História da Talita
            </button>
          </Member>

          <Member isSelected={selectedMember === 2}>
            <img src={vivianeImg} alt="Viviane" />
            <div className="legend">
              <p>Viviane</p>
              <div className="animate-job">
                <span>Coordenadora</span>
              </div>
            </div>
            <button
              type="button"
              className="trigger"
              onClick={() => setSelectedMember(2)}
            >
              História da Viviane
            </button>
          </Member>

          <Member isSelected={selectedMember === 3}>
            <img src={anaBeatrizImg} alt="Talita" />
            <div className="legend">
              <p>Ana Beatriz</p>
              <div className="animate-job">
                <span>Cargo</span>
              </div>
            </div>
            <button
              type="button"
              className="trigger"
              onClick={() => setSelectedMember(3)}
            >
              História da Ana Beatriz
            </button>
          </Member>
        </Team>
      </Hero>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default About;

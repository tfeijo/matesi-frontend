import { ReactComponent as ScrollDownIcon } from '../../../assets/methodology/scroll-down.svg';
import manReading from '../../../assets/methodology/man-reading.png';
import helpingHandsPhone from '../../../assets/methodology/helping-hands-phone.png';
import helpingHandsTabletUp from '../../../assets/methodology/helping-hands-tablet-up.png';
import megaphoneManScreaming from '../../../assets/methodology/megaphone-man-screaming.png';
import exercise from '../../../assets/methodology/exercise.png';
import teamworkHands from '../../../assets/methodology/teamwork-hands.png';
import directionsPlate from '../../../assets/methodology/directions-plate.png';

import useMediaQuery from '../../../hooks/useMediaQuery';

import BannerCTA from '../../../components/BannerCTA';

import {
  Hero,
  Memorization,
  Assist,
  Transmission,
  Exercise,
  Synergy,
  Importance,
} from './styles';

const Methodology: React.FC = () => {
  const isMinWidth700 = useMediaQuery('(min-width: 700px)');

  return (
    <>
      <Hero>
        <h1>Uma metodologia única, pensada em você</h1>
        <p>
          Em nosso curso trabalhamos com uma metodologia própria, a metodologia{' '}
          <strong>MATESI</strong>.
        </p>

        <ScrollDownIcon />
      </Hero>

      <Memorization>
        <div className="container">
          <div className="text-container">
            <h2>Memorization</h2>
            <p>
              A memorização é um fator muito importante no ensino de uma língua
              estrangeira. É a partir dela que elaborarmos nossos conhecimentos,
              relacionamos fatos e reproduzimos informações e vivências. Cada
              indivíduo tem mais facilidade com uma ou mais memórias. Um aluno
              pode ter mais facilidade com a memória visual, enquanto outro pode
              ter mais facilidade com a auditiva. Por isso é importante explorar
              o máximo de memórias possíveis para que possamos atingir cada
              aluno.
            </p>
          </div>

          <div className="image-container">
            <img src={manReading} alt="Homem lendo" />
          </div>
        </div>
      </Memorization>

      <Assist>
        <div className="container">
          <div className="text-container">
            <h2>Assist</h2>
            <p>
              Todos nós precisamos de assistência. Nós da Matesi Idiomas
              enxergamos o processo de ensino como uma cooperação para o
              crescimento dos nossos alunos, e por isso os incentivamos a fazer
              todos os questionamentos necessários, a fim de que não restem
              dúvidas sobre o conteúdo apresentado. Cada aluno terá menos ou
              mais dificuldades em determinados assuntos, e nós estamos aqui
              para ajudar cada um deles.
            </p>
          </div>

          <div className="image-container">
            <div className="img-gradient-container">
              <img
                src={isMinWidth700 ? helpingHandsTabletUp : helpingHandsPhone}
                alt="Dando as mãos"
              />
            </div>
          </div>
        </div>
      </Assist>

      <Transmission>
        <div className="container">
          <div className="text-container">
            <h2>Transmission</h2>
            <p>
              A transmissão está ligada à comunicação, que é o foco do nosso
              curso. O fator facilitador entre o aluno e o conhecimento que ele
              quer adquirir é a mediação efetuada pelo professor, que domina os
              conteúdos a serem transmitidos. Utilizando-se dos melhores métodos
              de ensino, além de facilitar a aprendizagem, o professor garante a
              profundidade necessária na aquisição do conhecimento.
            </p>
          </div>

          <div className="image-container">
            <img src={megaphoneManScreaming} alt="Homem gritando no megafone" />
          </div>
        </div>
      </Transmission>

      <Exercise>
        <div className="container">
          <div className="text-container">
            <h2>Exercise</h2>
            <p>
              A prática é fundamental no processo de aprendizagem. Grandes
              resultados são obtidos por meio do exercício contínuo. Além disso,
              a prática influencia fortemente o fator memória.
            </p>
          </div>

          <div className="image-container">
            <img src={exercise} alt="Exercício" />
          </div>
        </div>
      </Exercise>

      <Synergy>
        <div className="container">
          <div className="text-container">
            <h2>Synergy</h2>
            <p>
              Não existe crescimento sem cooperação. A Matesi Idiomas empenha-se
              no seu trabalho de agregar valor ao aluno por meio do conhecimento
              e entende que a dedicação do aluno é uma peça crucial. O processo
              de ensino e aprendizagem é, na verdade, um trabalho em equipe.
            </p>
          </div>

          <div className="image-container">
            <div className="overflow-x-hidden">
              <img src={teamworkHands} alt="Trabalho em equipe" />
            </div>
          </div>
        </div>
      </Synergy>

      <Importance>
        <div className="container">
          <div className="text-container">
            <h2>Importance</h2>
            <p>
              A importância do nosso trabalho está centrada nas necessidades de
              cada aluno. A Matesi Idiomas entende que cada um tem uma dor e nós
              precisamos compreendê-las e saná-las. Consideramos importante
              atender os alunos em suas individualidades.
            </p>
          </div>

          <div className="image-container">
            <img src={directionsPlate} alt="Placas apontando direções" />
          </div>
        </div>
      </Importance>

      <BannerCTA message="Faça sua pré-matricula e estude conosco" />
    </>
  );
};

export default Methodology;

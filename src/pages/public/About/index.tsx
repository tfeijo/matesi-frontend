import { useState } from 'react';
import talitaImg from '../../../assets/about/talita.png';
import vivianeImg from '../../../assets/about/viviane.png';
import anaBeatrizImg from '../../../assets/about/ana-beatriz.png';

import placeholderImg from '../../../assets/about/placeholder.png';

import { Container, Hero, Team, Member } from './styles';
import { AboutTimeline } from './Timeline';
import BannerCTA from '../../../components/BannerCTA';

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(1);

  function showStory(number: number) {
    setSelectedMember(number);
  }

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
              onClick={() => showStory(1)}
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
              onClick={() => showStory(2)}
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
              onClick={() => showStory(3)}
            >
              História da Ana Beatriz
            </button>
          </Member>
        </Team>
      </Hero>

      <AboutTimeline
        className={selectedMember === 1 ? '' : 'hide'}
        sections={[
          {
            title: 'Um começo com muito esforço e amor...',
            text:
              'Aos 10 anos comecei a estudar inglês, aos 14 espanhol e aos 16estava formada nos dois. Comecei a dar aula aos 16 anos no curso em que havia me formado e alguns anos mais tarde me tornei coordenadora pedagógica dessa mesma instituição de ensino. Ao longo dos anos fui professora em escolas particulares e também sou concursada como professora de espanhol.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Uma paixão pelo aprendizado...',
            text:
              'No decorrer desse tempo, comecei a estudar francês e coreano. Então podemos dizer que adoro aprender idiomas! Além disso, sou professora de português para estrangeiros e essa também tem sido uma experiência incrível.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'E pelo ensino...',
            text:
              'Porém, mais importante que o meu gosto por aprender idiomas, é o meu desejo de ensiná-los. Acredito que não há nada mais gratificante que poder transmitir conhecimento. Ver o desenvolvimento dos alunos no processo de aprendizagem da língua estrangeira, ouvi-los dizer suas primeiras palavras e montar sua primeira frase é uma emoção que não cabe no peito.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Um sonho a se realizar...',
            text:
              'Mesmo tendo crescido muito nas instituições em que tenho trabalhado em todos esses anos, acredito que com o passar do tempo, desejamos conquistar novos desafios, percebemos que não vale a pena deixar nossos sonhos no papel e chega um momento que precisamos decidir se queremos correr o risco de viver uma história incrível, ou se queremos continuar sonhando e pensando se daria certo.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Um passo em direção a conquista.',
            text:
              'Foi então que decidi começar a fazer do meu sonho realidade. Convidei a Viviane e a Bia para fazerem parte desse sonho comigo e elas, que acreditam nas minhas aventuras, não pensaram duas vezes e toparam. Elas são meu braço direito, as pessoas que acreditam que tudo vai dar certo, e que, por trás das câmeras, garantem que tudo saia como planejado.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
        ]}
      />

      <AboutTimeline
        className={selectedMember === 2 ? '' : 'hide'}
        sections={[
          {
            title: 'Um passo em direção a conquista.',
            text:
              'Foi então que decidi começar a fazer do meu sonho realidade. Convidei a Viviane e a Bia para fazerem parte desse sonho comigo e elas, que acreditam nas minhas aventuras, não pensaram duas vezes e toparam. Elas são meu braço direito, as pessoas que acreditam que tudo vai dar certo, e que, por trás das câmeras, garantem que tudo saia como planejado.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },

          {
            title: 'Uma paixão pelo aprendizado...',
            text:
              'No decorrer desse tempo, comecei a estudar francês e coreano. Então podemos dizer que adoro aprender idiomas! Além disso, sou professora de português para estrangeiros e essa também tem sido uma experiência incrível.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'E pelo ensino...',
            text:
              'Porém, mais importante que o meu gosto por aprender idiomas, é o meu desejo de ensiná-los. Acredito que não há nada mais gratificante que poder transmitir conhecimento. Ver o desenvolvimento dos alunos no processo de aprendizagem da língua estrangeira, ouvi-los dizer suas primeiras palavras e montar sua primeira frase é uma emoção que não cabe no peito.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Um começo com muito esforço e amor...',
            text:
              'Aos 10 anos comecei a estudar inglês, aos 14 espanhol e aos 16estava formada nos dois. Comecei a dar aula aos 16 anos no curso em que havia me formado e alguns anos mais tarde me tornei coordenadora pedagógica dessa mesma instituição de ensino. Ao longo dos anos fui professora em escolas particulares e também sou concursada como professora de espanhol.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Um sonho a se realizar...',
            text:
              'Mesmo tendo crescido muito nas instituições em que tenho trabalhado em todos esses anos, acredito que com o passar do tempo, desejamos conquistar novos desafios, percebemos que não vale a pena deixar nossos sonhos no papel e chega um momento que precisamos decidir se queremos correr o risco de viver uma história incrível, ou se queremos continuar sonhando e pensando se daria certo.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
        ]}
      />

      <AboutTimeline
        className={selectedMember === 3 ? '' : 'hide'}
        sections={[
          {
            title: 'Um sonho a se realizar...',
            text:
              'Mesmo tendo crescido muito nas instituições em que tenho trabalhado em todos esses anos, acredito que com o passar do tempo, desejamos conquistar novos desafios, percebemos que não vale a pena deixar nossos sonhos no papel e chega um momento que precisamos decidir se queremos correr o risco de viver uma história incrível, ou se queremos continuar sonhando e pensando se daria certo.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Uma paixão pelo aprendizado...',
            text:
              'No decorrer desse tempo, comecei a estudar francês e coreano. Então podemos dizer que adoro aprender idiomas! Além disso, sou professora de português para estrangeiros e essa também tem sido uma experiência incrível.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'Um começo com muito esforço e amor...',
            text:
              'Aos 10 anos comecei a estudar inglês, aos 14 espanhol e aos 16estava formada nos dois. Comecei a dar aula aos 16 anos no curso em que havia me formado e alguns anos mais tarde me tornei coordenadora pedagógica dessa mesma instituição de ensino. Ao longo dos anos fui professora em escolas particulares e também sou concursada como professora de espanhol.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
          {
            title: 'E pelo ensino...',
            text:
              'Porém, mais importante que o meu gosto por aprender idiomas, é o meu desejo de ensiná-los. Acredito que não há nada mais gratificante que poder transmitir conhecimento. Ver o desenvolvimento dos alunos no processo de aprendizagem da língua estrangeira, ouvi-los dizer suas primeiras palavras e montar sua primeira frase é uma emoção que não cabe no peito.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },

          {
            title: 'Um passo em direção a conquista.',
            text:
              'Foi então que decidi começar a fazer do meu sonho realidade. Convidei a Viviane e a Bia para fazerem parte desse sonho comigo e elas, que acreditam nas minhas aventuras, não pensaram duas vezes e toparam. Elas são meu braço direito, as pessoas que acreditam que tudo vai dar certo, e que, por trás das câmeras, garantem que tudo saia como planejado.',
            image: {
              src: placeholderImg,
              alt: 'Placeholder',
            },
          },
        ]}
      />

      <BannerCTA
        message="Ah...eu sou a Tali e gostaria de convidar VOCÊ a fazer parte desse sonho."
        secondaryAction={{
          title: 'Trabalhe conosco',
          to: '/trabalhe-conosco',
        }}
      />
    </Container>
  );
};

export default About;

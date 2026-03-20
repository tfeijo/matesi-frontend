import CourseWrapper from '../../../../components/CourseWrapper';
import backgroundImg from '../../../../assets/courses/french-flag.png';
import disneyImg from '../../../../assets/courses/disney.png';
import galleryPlaceholderImg from '../../../../assets/courses/gallery-placeholder.png';
import placeholderImg from '../../../../assets/about/placeholder.png';

const French: React.FC = () => {
  return (
    <CourseWrapper
      hero={{
        title:
          'Aprenda o idioma mais falado no mundo com os melhores professores e uma metodologia única',
        backgroundUrl: backgroundImg,
      }}
      travels={{
        content:
          'O Parque Disney’s Magic Kingdom é considerado o principal parque de Orlando, com dezenas de atrações. Ele é sem dúvidas o mais visitado e procurado parque por ser o que mais apresenta atrações do Mickey, das Princesas e de todos os personagens da Disney. A parada musical A Dream Come True é a principal atração do parque e a mais emocionante. O Magic Kingdom é o que ele propõe: um reino mágico. Mesmo entre adultos, é raro encontrar quem não derrame uma lágrima ao ver o show de fogos ao cair da noite.',
        imageUrl: disneyImg,
        imageAlt: 'Disney',
      }}
      about={{
        content: [
          'O mundo pode não ter um idioma global, mas o inglês é a opção padrão para inúmeras formas de comunicação. É por isso que um dos benefícios de aprender inglês é que, além de ser uma credencial atraente em seu currículo, também está estatisticamente comprovado que aumenta seu potencial de contratação.',
          'A globalização empurrou a língua para áreas do mundo que, de outra forma, ela não alcançaria. Uma pesquisa recente do LinkedIn revelou que 90% dos diretores de RH, CEOs e CMOs afirmaram que ter funcionários que falam inglês é benéfico para seus negócios. Eles provavelmente afirmam isso porque o impacto do inglês no mundo dos negócios já é sentido há muito tempo. Hoje, é um pilar no setor empresarial.',
          'A ciência também é uma comunidade amplamente centrada no inglês. Com novos termos e artigos publicados mais propensos a aparecer no idioma, os benefícios de aprendê-lo são imensos.',
        ],
        summary: {
          classTime: '2h/semana',
          ages: '13 anos',
          students: '8 alunos',
        },
      }}
      gallery={[
        {
          imageUrl: galleryPlaceholderImg,
          description: 'Atividade em grupo realizada durante o curso.',
        },
        {
          imageUrl: placeholderImg,
          description: 'Atividade em grupo realizada durante o curso.',
        },
        {
          imageUrl: backgroundImg,
          description: 'Atividade em grupo realizada durante o curso.',
        },
      ]}
    />
  );
};

export default French;

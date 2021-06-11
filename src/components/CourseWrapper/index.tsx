import { CourseWrapperProps } from './types';
import { About, Gallery, Hero, Travels } from './styles';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import BannerCTA from '../BannerCTA';

function CourseWrapper({ hero, travels, about, gallery }: CourseWrapperProps) {
  return (
    <main>
      <Hero backgroundUrl={hero.backgroundUrl}>
        <div className="container">
          <h1>{hero.title}</h1>

          <Button asLink to="/matricular" size="large">
            Faça sua matrícula
          </Button>
        </div>
      </Hero>

      <Travels>
        <SectionTitle level="h1">Conheça o mundo</SectionTitle>

        <div className="travels__main">
          <div className="travels__image">
            <img src={travels.imageUrl} alt={travels.imageAlt} />
          </div>

          <div className="travels__message">
            <p>{travels.content}</p>
          </div>
        </div>
      </Travels>

      <About>
        <div className="detailed">
          {about.content.map(paragraph => (
            <p>{paragraph}</p>
          ))}
        </div>
        <div className="summarized">
          <p>
            <span>Carga Horária</span>
            <span>{about.summary.classTime}</span>
          </p>
          <p>
            <span>Idade mínima</span>
            <span>{about.summary.ages}</span>
          </p>
          <p>
            <span>Alunos/turma</span>
            <span>{about.summary.students}</span>
          </p>
        </div>
      </About>

      <Gallery>
        <SectionTitle level="h1">Atividades e eventos em grupo</SectionTitle>

        <div>
          {gallery.map(item => (
            <figure>
              <div className="description">
                <p>{item.description}</p>
              </div>
              <img src={item.imageUrl} alt={item.description} />
            </figure>
          ))}
        </div>
      </Gallery>

      <BannerCTA message="Faça sua pré-matricula e estude conosco" />
    </main>
  );
}

export default CourseWrapper;

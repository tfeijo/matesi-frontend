import { MouseEvent, useRef } from 'react';
import { MdArrowDownward } from 'react-icons/md';
import { RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';

import { ReactComponent as Travel } from '../../../assets/travel.svg';
import { ReactComponent as Live } from '../../../assets/live.svg';
import { ReactComponent as ThemedClass } from '../../../assets/themed-class.svg';

import womanAvatar from '../../../assets/placeholder/woman-avatar.jpg';
import partner from '../../../assets/placeholder/partner.png';
import partner2 from '../../../assets/placeholder/partner-2.png';

import Button from '../../../components/Button';
import Link from '../../../components/Link';
import SectionTitle from '../../../components/SectionTitle';
import AdvantageCard from './AdvantageCard';
import CourseCard from './CourseCard';
import TestimonialCard from './TestimonialCard';

import {
  Hero,
  Advantages,
  Courses,
  Testimonials,
  Partners,
  Contact,
} from './styles';

const Home: React.FC = () => {
  const coursesRef = useRef<HTMLDivElement>(null);

  function scrollToCourses(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (coursesRef) {
      const offsetTop = coursesRef.current?.offsetTop as number;

      const navbarHeight = document.querySelector('#root > header')
        ?.clientHeight as number;

      window.scroll({
        top: offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <Hero>
        <div>
          <h1>Matesi Idiomas, o mundo na ponta da língua</h1>

          <Button size="large" icon={MdArrowDownward} onClick={scrollToCourses}>
            Nossos cursos
          </Button>
        </div>
      </Hero>

      <Advantages>
        <div>
          <SectionTitle level="h2">Vantagens</SectionTitle>

          <div className="card_container">
            <AdvantageCard
              iconSVG={ThemedClass}
              title="Aulas de imersão"
              description="Videoaulas incríveis abordando assuntos da vida real e do cotidiano."
            />

            <AdvantageCard
              iconSVG={Travel}
              title="Viagens em grupo"
              description="Viagens organizadas em grupo para a prática do idioma com nativos."
            />

            <AdvantageCard
              iconSVG={Live}
              title="Aulas online e ao vivo"
              description="Assista aulas no momento em que desejar e participe de aulas especiais ao vivo."
            />
          </div>
        </div>
      </Advantages>

      <Courses ref={coursesRef}>
        <SectionTitle level="h2">Conheça nossos cursos</SectionTitle>

        <div className="card_container">
          <CourseCard
            course="english"
            title="Inglês"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, lectus aenean aliquam duis dictum nec et."
            linkTo="/cursos/ingles"
          />

          <CourseCard
            course="spanish"
            title="Espanhol"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, lectus aenean aliquam duis dictum nec et."
            linkTo="/cursos/espanhol"
          />

          <CourseCard
            course="french"
            title="Frânces"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, lectus aenean aliquam duis dictum nec et."
            linkTo="/cursos/frances"
          />

          <CourseCard
            course="korean"
            title="Coreano"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, lectus aenean aliquam duis dictum nec et."
            linkTo="/cursos/coreano"
          />

          <CourseCard
            course="german"
            title="Alemão"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, lectus aenean aliquam duis dictum nec et."
            linkTo="/cursos/alemao"
          />
        </div>
      </Courses>

      <Testimonials>
        <div>
          <SectionTitle level="h2">O que nossos alunos falam</SectionTitle>

          <div className="card_container">
            <TestimonialCard
              studentName="Jane Doe"
              studentPhoto={womanAvatar}
              course="english"
              message="Vel iaculis montes, enim, purus et elit egestas auctor. Mauris
                blandit ac euismod sed. In molestie amet neque nisi, mauris.
                Potenti auctor pellentesque euismod egestas quis."
            />
          </div>
        </div>
      </Testimonials>

      <Partners>
        <SectionTitle level="h2">Nossos parceiros</SectionTitle>

        <div>
          <img src={partner2} alt="Nome do parceiro" />
          <img src={partner} alt="Nome do parceiro" />
          <img src={partner2} alt="Nome do parceiro" />
          <img src={partner} alt="Nome do parceiro" />
        </div>
      </Partners>

      <Contact>
        <div>
          <SectionTitle level="h2">Fale conosco</SectionTitle>

          <div className="content_container">
            <p>Entre em contato conosco por uma de nossas redes sociais.</p>

            <div className="links">
              <Button
                asLink
                external
                href="https://www.instagram.com/matesidiomas"
                iconOnly
                icon={RiInstagramLine}
              />

              <Button
                asLink
                external
                href="https://wa.me/55ddd9numero"
                iconOnly
                icon={RiWhatsappLine}
              />

              <Button
                asLink
                external
                href="https://telegram.me/YourUsername"
                iconOnly
                icon={FaTelegramPlane}
              />
            </div>

            <p>
              Se preferir, <Link to="/contato">clique aqui</Link> para nos
              enviar uma mensagem pelo nosso formulário.
            </p>
          </div>
        </div>
      </Contact>
    </>
  );
};

export default Home;

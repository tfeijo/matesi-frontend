import { MouseEvent, useRef } from 'react';
import { MdArrowDownward, MdArrowForward } from 'react-icons/md';
import { RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';
import Button from '../../../components/Button';

import blobImageHome from '../../../assets/blob-image-home.png';
import Travel from '../../../assets/travel.svg';
import Live from '../../../assets/live.svg';
import ThemedClass from '../../../assets/themed-class.svg';
import usaFlagVertical from '../../../assets/flags/usa-vertical.svg';
import spainFlagVertical from '../../../assets/flags/spain-vertical.svg';
import franceFlagVertical from '../../../assets/flags/france-vertical.svg';
import koreanFlagVertical from '../../../assets/flags/korean-vertical.svg';
import germanFlagVertical from '../../../assets/flags/german-vertical.svg';
import usaFlagSquare from '../../../assets/flags/usa-square.svg';
import koreanFlagSquare from '../../../assets/flags/korean-square.svg';
import manAvatar from '../../../assets/placeholder/man-avatar.jpg';
import womanAvatar from '../../../assets/placeholder/woman-avatar.jpg';
import partner from '../../../assets/placeholder/partner.png';
import partner2 from '../../../assets/placeholder/partner-2.png';

import {
  Hero,
  Advantages,
  Courses,
  Testimonials,
  Teachers,
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

      // eslint-disable-next-line no-restricted-globals
      scroll({
        top: offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <Hero>
        <div className="headings">
          <h1>Um titulo chamativo e atraente aqui</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nesciunt accusamus, enim vero consequatur ex blanditiis atque eius
            ipsam rem!
          </p>

          <Button icon={MdArrowDownward} size="large" onClick={scrollToCourses}>
            Nossos cursos
          </Button>
        </div>

        <span>
          <img src={blobImageHome} alt="People happy" />
        </span>
      </Hero>

      <Advantages>
        <h2>Vantagens</h2>

        <div>
          <div className="card">
            <img src={ThemedClass} alt="Aulas de imersão" />
            <h3>Aulas de imersão</h3>
            <p>
              Videoaulas incríveis abordando assuntos da vida real e do
              cotidiano.
            </p>
          </div>

          <div className="card">
            <img src={Travel} alt="Viagens em grupo" />
            <h3>Viagens em grupo</h3>
            <p>
              Viagens organizadas em grupo para a prática do idioma com nativos.
            </p>
          </div>

          <div className="card">
            <img src={Live} alt="Aulas online e ao vivo" />
            <h3>Aulas online e ao vivo</h3>
            <p>
              Assista aulas no momento em que desejar e participe de aulas
              especiais ao vivo.
            </p>
          </div>
        </div>
      </Advantages>

      <Courses ref={coursesRef}>
        <div className="container">
          <h2>Conheça nossos cursos</h2>

          <div className="card_container">
            <div className="card">
              <img src={usaFlagVertical} alt="Bandeira dos EUA" />

              <div className="card-content">
                <div className="title-row">
                  <h3>Inglês</h3>
                  <span>Presencial</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                  lectus aenean aliquam duis dictum nec et.
                </p>

                <Link to="/cursos/ingles">
                  SAIBA MAIS <MdArrowForward size={20} />
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={spainFlagVertical} alt="Bandeira da Espanha" />

              <div className="card-content">
                <div className="title-row">
                  <h3>Espanhol</h3>
                  <span>Presencial</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                  lectus aenean aliquam duis dictum nec et.
                </p>

                <Link to="/cursos/espanhol">
                  SAIBA MAIS <MdArrowForward size={20} />
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={franceFlagVertical} alt="Bandeira da França" />

              <div className="card-content">
                <div className="title-row">
                  <h3>Francês</h3>
                  <span>Online</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                  lectus aenean aliquam duis dictum nec et.
                </p>

                <Link to="/cursos/frances">
                  SAIBA MAIS <MdArrowForward size={20} />
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={koreanFlagVertical} alt="Bandeira da Coreia" />

              <div className="card-content">
                <div className="title-row">
                  <h3>Coreano</h3>
                  <span>Online</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                  lectus aenean aliquam duis dictum nec et.
                </p>

                <Link to="/cursos/coreano">
                  SAIBA MAIS <MdArrowForward size={20} />
                </Link>
              </div>
            </div>

            <div className="card">
              <img src={germanFlagVertical} alt="Bandeira da Alemanha" />

              <div className="card-content">
                <div className="title-row">
                  <h3>Alemão</h3>
                  <span>Online</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                  lectus aenean aliquam duis dictum nec et.
                </p>

                <Link to="/cursos/alemao">
                  SAIBA MAIS <MdArrowForward size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Courses>

      <Testimonials>
        <h2>O que nossos alunos falam</h2>

        <div className="carousel">
          <div className="carousel-item">
            <div className="person">
              <div className="images">
                <img src={manAvatar} alt="Nome da pessoa" className="photo" />
                <img
                  src={usaFlagSquare}
                  alt="Bandeira dos EUA"
                  className="language"
                />
              </div>
              <p>John Doe</p>
            </div>

            <p className="phrase">
              Vel iaculis montes, enim, purus et elit egestas auctor. Mauris
              blandit ac euismod sed. In molestie amet neque nisi, mauris.
              Potenti auctor pellentesque euismod egestas quis.
            </p>
          </div>
        </div>
      </Testimonials>

      <Teachers>
        <div className="container">
          <h2>Os melhores professores</h2>

          <div className="teacher-list">
            <div className="teacher-item">
              <img src={manAvatar} alt="Foto do professor" />

              <div className="teacher-about">
                <strong>John Doe</strong>

                <p>
                  Ac adipiscing curabitur vitae mi id. Et porttitor tortor enim,
                  consequat ut viverra in id tincidunt. Felis egestas nisl cras
                  tellus, ac ipsum. Mus venenatis id pretium felis.
                </p>
              </div>
            </div>

            <div className="teacher-item">
              <img src={womanAvatar} alt="Foto do professor" />

              <div className="teacher-about">
                <strong>Jane Doe</strong>

                <p>
                  Ac adipiscing curabitur vitae mi id. Et porttitor tortor enim,
                  consequat ut viverra in id tincidunt. Felis egestas nisl cras
                  tellus, ac ipsum. Mus venenatis id pretium felis.
                </p>
              </div>
            </div>

            <div className="teacher-item">
              <img src={manAvatar} alt="Foto do professor" />

              <div className="teacher-about">
                <strong>John Doe</strong>

                <p>
                  Ac adipiscing curabitur vitae mi id. Et porttitor tortor enim,
                  consequat ut viverra in id tincidunt. Felis egestas nisl cras
                  tellus, ac ipsum. Mus venenatis id pretium felis.
                </p>
              </div>
            </div>

            <div className="teacher-item">
              <img src={womanAvatar} alt="Foto do professor" />

              <div className="teacher-about">
                <strong>Jane Doe</strong>

                <p>
                  Ac adipiscing curabitur vitae mi id. Et porttitor tortor enim,
                  consequat ut viverra in id tincidunt. Felis egestas nisl cras
                  tellus, ac ipsum. Mus venenatis id pretium felis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Teachers>

      <Partners>
        <h2>Nossos parceiros</h2>

        <div>
          <img src={partner} alt="Nome do parceiro" />
          <img src={partner2} alt="Nome do parceiro" />
          <img src={partner2} alt="Nome do parceiro" />
          <img src={partner} alt="Nome do parceiro" />
        </div>
      </Partners>

      <Contact>
        <div className="container">
          <h2>Fale conosco</h2>

          <p>
            Clique aqui e entre em contato conosco por uma de nossas redes
            sociais.
          </p>

          <div>
            <a
              href="https://wa.me/55ddd9numero"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button icon={RiWhatsappLine} iconOnly />
            </a>
            <a
              href="https://www.instagram.com/matesidiomas"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button icon={RiInstagramLine} iconOnly />
            </a>
            <a
              href="https://telegram.me/YourUsername"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button icon={FaTelegramPlane} iconOnly />
            </a>
          </div>

          <p>
            Se preferir, <Link to="/contato">clique aqui</Link> para nos enviar
            uma mensagem pelo nosso formulário.
          </p>
        </div>
      </Contact>
    </>
  );
};

export default Home;

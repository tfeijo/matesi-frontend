import { Link, useHistory } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
import logoWhite from '../../assets/logo-white.svg';

import Button from '../Button';
import {
  Container,
  ContentContainer,
  TopContent,
  Divider,
  BottomContent,
} from './styles';

const Footer: React.FC = () => {
  const history = useHistory();

  function handleNavigateToEnroll() {
    history.push('/matricular');
  }

  return (
    <Container>
      <ContentContainer>
        <TopContent>
          <div className="cta-content">
            <img src={logoWhite} alt="MATESI Idiomas" />

            <div>
              <Button variant="ghost-white" iconOnly icon={FaInstagram} />
              <Button variant="ghost-white" iconOnly icon={FaWhatsapp} />
              <Button variant="ghost-white" iconOnly icon={FaTelegramPlane} />
            </div>

            <Button variant="outline-white" onClick={handleNavigateToEnroll}>
              Faça sua matrícula
            </Button>
          </div>

          <div className="sitemap">
            <div className="list-block">
              <h3>Cursos</h3>
              <ul>
                <li>
                  <Link to="/cursos/ingles">Inglês</Link>
                </li>
                <li>
                  <Link to="/cursos/espanhol">Espanhol</Link>
                </li>
                <li>
                  <Link to="/cursos/frances">Francês</Link>
                </li>
                <li>
                  <Link to="/cursos/coreano">Coreano</Link>
                </li>
                <li>
                  <Link to="/cursos/alemao">Alemão</Link>
                </li>
              </ul>
            </div>

            <div className="list-block">
              <h3>Site</h3>
              <ul>
                <li>
                  <Link to="/">Início</Link>
                </li>
                <li>
                  <Link to="/metodologia">Metodologia</Link>
                </li>
                <li>
                  <Link to="/sobre-nos">Sobre nós</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
              </ul>
            </div>

            <div className="list-block">
              <h3>Portal</h3>
              <ul>
                <li>
                  <Link to="/cursos/ingles">Coordenadores</Link>
                </li>
              </ul>
            </div>
          </div>
        </TopContent>
      </ContentContainer>

      <Divider />

      <ContentContainer>
        <BottomContent>
          <p>
            MATESI Idiomas <MdCopyright /> {new Date().getFullYear()} - Todos os
            direitos reservados
          </p>

          <p>Desenvolvido por ConSupport</p>
        </BottomContent>
      </ContentContainer>
    </Container>
  );
};

export default Footer;

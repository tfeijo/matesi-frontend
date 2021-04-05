import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import Button from '../Button';
import {
  Background,
  MainContent,
  About,
  Sitemap,
  Divider,
  Copyright,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Background>
      <MainContent>
        <About>
          <Logo />

          <div>
            <Button
              asLink
              external
              href="https://www.instagram.com/matesidiomas"
              color="light"
              variant="outline"
              iconOnly
              icon={FaInstagram}
            />
            <Button
              asLink
              external
              href="https://wa.me/55ddd9numero"
              color="light"
              variant="outline"
              iconOnly
              icon={FaWhatsapp}
            />
            <Button
              asLink
              external
              href="https://telegram.me/YourUsername"
              color="light"
              variant="outline"
              iconOnly
              icon={FaTelegramPlane}
            />
          </div>

          <Button asLink to="/matricular" size="large">
            Faça sua matrícula
          </Button>
        </About>

        <Sitemap>
          <div>
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

          <div>
            <h3>Geral</h3>
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
              <li>
                <Link to="/trabalhe-conosco">Trabalhe conosco</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Portal</h3>
            <ul>
              <li>
                <Link to="/entrar">Acessar</Link>
              </li>
            </ul>
          </div>
        </Sitemap>
      </MainContent>

      <Divider />

      <Copyright>
        <p>
          MATESI Idiomas <MdCopyright /> {new Date().getFullYear()} - Todos os
          direitos reservados
        </p>

        <p>Desenvolvido por ConSupport</p>
      </Copyright>
    </Background>
  );
};

export default Footer;

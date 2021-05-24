import { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import useAuth from '../../hooks/useAuth';
import Button from '../Button';
import { NavDropdown } from './NavDropdown';

import { Header, Container, Backdrop, NavMenu } from './styles';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.removeAttribute('style');
  }, [location]);

  function openMenu() {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    setIsMenuOpen(false);
    document.body.removeAttribute('style');
  }

  return (
    <Header>
      <Container>
        <NavLink to="/">
          <Logo />
        </NavLink>

        <Button
          color="light"
          variant="ghost"
          iconOnly
          icon={MdMenu}
          onClick={openMenu}
          className="nav-open"
        />

        {isMenuOpen && <Backdrop onClick={closeMenu} />}

        <NavMenu isOpen={isMenuOpen}>
          <Button
            color="light"
            variant="ghost"
            iconOnly
            icon={MdClose}
            onClick={closeMenu}
            className="nav-close"
          />

          <ul className="main_nav">
            <li>
              <NavDropdown
                title="cursos"
                links={[
                  { to: '/cursos/ingles', title: 'Inglês' },
                  { to: '/cursos/espanhol', title: 'Espanhol' },
                  { to: '/cursos/frances', title: 'Frances' },
                  { to: '/cursos/coreano', title: 'Coreano' },
                  { to: '/cursos/alemao', title: 'Alemão' },
                ]}
              />
            </li>
            <li>
              <NavLink to="/metodologia">Metodologia</NavLink>
            </li>
            <li>
              <NavLink to="/sobre-nos">Sobre nós</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
            <li>
              <Button asLink to="/matricular" className="enroll-button">
                Matricule-se
              </Button>
            </li>
          </ul>
        </NavMenu>
      </Container>
    </Header>
  );
};

export default Navbar;

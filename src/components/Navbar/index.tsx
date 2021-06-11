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
  const { isSigned, signOut } = useAuth();

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
                title="Cursos"
                links={[
                  { to: '/cursos/frances', title: 'Frances' },
                  { to: '/cursos/coreano', title: 'Coreano' },
                  { to: '/cursos/alemao', title: 'Alemão' },
                  { to: '/cursos/ingles', title: 'Inglês' },
                  { to: '/cursos/espanhol', title: 'Espanhol' },
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
            {isSigned ? (
              <li>
                <NavDropdown
                  title="Portal"
                  links={[
                    { to: '/mensagens/matricular', title: 'Mensagens' },
                    { to: '/matriculados', title: 'Matriculados' },
                    {
                      to: '/sair',
                      title: 'Sair',
                      onClick: () => signOut(),
                    },
                  ]}
                />
              </li>
            ) : (
              <li>
                <Button asLink to="/matricular" className="enroll-button">
                  Matricule-se
                </Button>
              </li>
            )}
          </ul>
        </NavMenu>
      </Container>
    </Header>
  );
};

export default Navbar;

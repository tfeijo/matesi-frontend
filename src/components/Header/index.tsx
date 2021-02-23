import { useEffect, useState } from 'react';
import { MdClose, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';
import { NavLink, useLocation, Link } from 'react-router-dom';

import logoWhite from '../../assets/logo-white.svg';
import Button from '../Button';

import { Container, Content, Navigation, NavMenu, Dropdown } from './styles';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <Container>
      <Content>
        <NavLink to="/">
          <img src={logoWhite} alt="MATESI Idiomas" />
        </NavLink>

        <Navigation>
          <button
            type="button"
            className="nav-open"
            onClick={() => setIsMenuOpen(true)}
          >
            <MdMenu size={24} />
          </button>

          <NavMenu isOpen={isMenuOpen} tabIndex={isMenuOpen ? 0 : -1}>
            <button
              type="button"
              className="nav-close"
              onClick={() => setIsMenuOpen(false)}
            >
              <MdClose size={24} />
            </button>

            <ul>
              <li>
                <Dropdown isOpen={isDropdownOpen}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Cursos <MdKeyboardArrowDown size={24} />
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to="/cursos/ingles"
                        tabIndex={isDropdownOpen ? 0 : -1}
                      >
                        Inglês
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cursos/espanhol"
                        tabIndex={isDropdownOpen ? 0 : -1}
                      >
                        Espanhol
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cursos/frances"
                        tabIndex={isDropdownOpen ? 0 : -1}
                      >
                        Frances
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cursos/coreano"
                        tabIndex={isDropdownOpen ? 0 : -1}
                      >
                        Coreano
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cursos/alemao"
                        tabIndex={isDropdownOpen ? 0 : -1}
                      >
                        Alemão
                      </NavLink>
                    </li>
                  </ul>
                </Dropdown>
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
                <Link to="/matricular" className="enroll-button">
                  <Button variant="secondary">Matricule-se</Button>
                </Link>
              </li>
            </ul>
          </NavMenu>
        </Navigation>
      </Content>
    </Container>
  );
};

export default Header;

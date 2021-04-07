import { useEffect, useRef, useState } from 'react';
import { MdClose, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import Button from '../Button';

import { Header, Container, Backdrop, NavMenu, Dropdown } from './styles';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  function closeDropdown(e: MouseEvent) {
    if (e.target instanceof Node) {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    document.body.style.overflow = 'initial';
  }, [location]);

  function openMenu() {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    setIsMenuOpen(false);
    document.body.style.overflow = 'initial';
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
              <Dropdown isOpen={isDropdownOpen} ref={dropdownRef}>
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Cursos <MdKeyboardArrowDown size={24} />
                </button>

                <ul>
                  <li>
                    <NavLink to="/cursos/ingles">Inglês</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cursos/espanhol">Espanhol</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cursos/frances">Frances</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cursos/coreano">Coreano</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cursos/alemao">Alemão</NavLink>
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

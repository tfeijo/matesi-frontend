import { ReactNode, useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';

import { Container } from './styles';

interface NavDropdownProps {
  title: ReactNode;
  links: Array<{
    to: string;
    title: string;
    onClick?: (event: React.MouseEvent) => void;
  }>;
}

export function NavDropdown({ title, links }: NavDropdownProps) {
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
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <Container isOpen={isDropdownOpen} ref={dropdownRef}>
      <button
        type="button"
        className="dropdown-trigger"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {title} <MdKeyboardArrowDown size={24} />
      </button>

      <ul>
        {links.map(link => (
          <li key={link.to + link.title}>
            <NavLink to={link.to} onClick={link.onClick}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
}

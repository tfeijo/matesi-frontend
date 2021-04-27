import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Button from '../Button';

import { Container, Content, DropdownItem } from './styles';

type DropdownComponent<P> = React.FC<P> & {
  Item: React.FunctionComponent;
};

type DropdownProps = {
  triggerTitle: string;
  className?: string;
};

const Dropdown: DropdownComponent<DropdownProps> = ({
  triggerTitle,
  className,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className={className}>
      <Button
        color="neutral"
        variant="outline"
        icon={isOpen ? MdKeyboardArrowUp : MdKeyboardArrowDown}
        onClick={toggleDropdown}
      >
        {triggerTitle}
      </Button>
      {isOpen && <Content>{children}</Content>}
    </Container>
  );
};

const Item: React.FC = ({ children }) => (
  <DropdownItem>{children}</DropdownItem>
);

Dropdown.Item = Item;

export default Dropdown;

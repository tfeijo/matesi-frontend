/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import {
  RiAccountBoxLine,
  RiCloseLine,
  RiInboxArchiveLine,
  RiQuestionLine,
  RiSuitcaseLine,
} from 'react-icons/ri';
import { MdViewList, MdChevronLeft } from 'react-icons/md';

import { Container, MenuToggler, NavMenu, Badge } from './styles';

type TMenuItems = {
  to: string;
  Icon: IconType;
  title: string;
  qtdNotRead?: number;
};

type TActiveTab = Pick<TMenuItems, 'title' | 'qtdNotRead'>;

const MENU_ITEMS: Array<TMenuItems> = [
  {
    to: '/matriculas',
    Icon: RiAccountBoxLine,
    title: 'Pré-matricula',
    qtdNotRead: 150,
  },
  {
    to: '/fale-conosco',
    Icon: RiQuestionLine,
    title: 'Fale conosco',
    qtdNotRead: 10,
  },
  {
    to: '/trabalhe-conosco',
    Icon: RiSuitcaseLine,
    title: 'Trabalhe conosco',
    qtdNotRead: 5,
  },
  {
    to: '/arquivados',
    Icon: RiInboxArchiveLine,
    title: 'Arquivados',
  },
  {
    to: '/excluidos',
    Icon: RiCloseLine,
    title: 'Excluídos',
  },
];

const MailSidebar: React.FC = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TActiveTab>(MENU_ITEMS[0]);

  useEffect(() => {
    setIsMenuOpen(false);

    const newActiveTab = MENU_ITEMS.find(
      item => pathname === path + item.to && item,
    );

    if (newActiveTab) setActiveTab(newActiveTab);
  }, [pathname, path]);

  const showBadge = (qtdNotRead?: number) =>
    qtdNotRead && qtdNotRead >= 100 ? (
      <Badge>99+</Badge>
    ) : (
      <Badge>{qtdNotRead}</Badge>
    );

  return (
    <Container>
      <MenuToggler onClick={() => setIsMenuOpen(true)}>
        <span className="right-content">
          <MdViewList size={24} />
          {activeTab.title}
        </span>
      </MenuToggler>

      <NavMenu isOpen={isMenuOpen}>
        <ul>
          <li>
            <MenuToggler onClick={() => setIsMenuOpen(false)}>
              <span className="right-content">
                <MdChevronLeft size={24} />
                Voltar
              </span>
            </MenuToggler>
          </li>

          {MENU_ITEMS.map(({ to, Icon, title, qtdNotRead }, index) => (
            <li key={index}>
              <NavLink to={`${path}${to}`}>
                <span className="right-content">
                  <Icon size={24} />
                  {title}
                </span>

                {showBadge(qtdNotRead)}
              </NavLink>
            </li>
          ))}
        </ul>
      </NavMenu>
    </Container>
  );
};

export default MailSidebar;

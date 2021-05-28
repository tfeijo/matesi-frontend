import { useEffect, useState } from 'react';
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
import api from '../../../services/api';

type UnreadValues = {
  enroll: number;
  question: number;
  workingUs: number;
};

const MailSidebar: React.FC = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Pré-matricula');

  const [unreadValues, setUnreadValues] = useState<UnreadValues | null>(null);

  useEffect(() => {
    setIsMenuOpen(false);

    const newActiveTab = document.querySelector<HTMLAnchorElement>(
      'aside nav [aria-current]',
    );

    if (newActiveTab) setActiveTab(newActiveTab.text.replace(/\d+/g, ''));

    async function loadUnread() {
      const { data: enroll } = await api.get('registrations/unread');
      const { data: question } = await api.get('questions/unread');
      const { data: workingUs } = await api.get('work_with_us/unread');

      setUnreadValues({
        enroll,
        question,
        workingUs,
      });
    }

    try {
      loadUnread();
    } catch (error) {
      console.log(error);
    }
  }, [pathname]);

  const showBadge = (qtdNotRead: number) =>
    qtdNotRead >= 100 ? <Badge>99+</Badge> : <Badge>{qtdNotRead}</Badge>;

  return (
    <Container>
      <MenuToggler onClick={() => setIsMenuOpen(true)}>
        <span className="right-content">
          <MdViewList size={24} />
          {activeTab}
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

          <li>
            <NavLink to={`${path}/matriculas`}>
              <span className="right-content">
                <RiAccountBoxLine size={24} />
                Pré-matricula
              </span>

              {unreadValues?.enroll ? showBadge(unreadValues.enroll) : ''}
            </NavLink>
          </li>

          <li>
            <NavLink to={`${path}/fale-conosco`}>
              <span className="right-content">
                <RiQuestionLine size={24} />
                Fale conosco
              </span>

              {unreadValues?.question ? showBadge(unreadValues.question) : ''}
            </NavLink>
          </li>

          <li>
            <NavLink to={`${path}/trabalhe-conosco`}>
              <span className="right-content">
                <RiSuitcaseLine size={24} />
                Trabalhe conosco
              </span>

              {unreadValues?.workingUs ? showBadge(unreadValues.workingUs) : ''}
            </NavLink>
          </li>

          <li>
            <NavLink to={`${path}/arquivados`}>
              <span className="right-content">
                <RiInboxArchiveLine size={24} />
                Arquivados
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={`${path}/excluidos`}>
              <span className="right-content">
                <RiCloseLine size={24} />
                Excluídos
              </span>
            </NavLink>
          </li>
        </ul>
      </NavMenu>
    </Container>
  );
};

export default MailSidebar;

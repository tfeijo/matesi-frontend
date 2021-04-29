import { useContext, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { MdChevronLeft, MdSearch } from 'react-icons/md';
import { RiCloseLine, RiInboxArchiveLine } from 'react-icons/ri';

import { MailboxContext } from '../../../context/MailboxContext';

import Button from '../../Button';
import Input from '../../Input';
import Link from '../../Link';

import { Container, Header, SearchForm, ListItem } from './styles';
import useBreakpoints from '../../../hooks/useBreakpoints';

const MailList: React.FC = () => {
  const {
    messages,
    selectedMessage,
    selectMessage,
    toggleMessage,
  } = useContext(MailboxContext);
  const searchFormRef = useRef<FormHandles>(null);
  const [isSearching, setIsSearching] = useState(false);

  const { isTabletLandscapeUp } = useBreakpoints();

  const showMessage = (index: number) => {
    selectMessage(index);
    if (!isTabletLandscapeUp) toggleMessage(true);
  };

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <Container>
      <Header isSearching={isSearching}>
        <h2>
          {messages.length} {messages.length === 1 ? 'Mensagem' : 'Mensagens'}
        </h2>

        <SearchForm
          isSearching={isSearching}
          ref={searchFormRef}
          onSubmit={data => console.log(data)}
        >
          <Button
            type={isSearching ? 'reset' : 'button'}
            iconOnly
            icon={isSearching ? MdChevronLeft : MdSearch}
            color="neutral"
            variant="outline"
            onClick={toggleSearch}
          />

          {isSearching && (
            <div>
              <Input
                name="search"
                placeholder="Pesquisar"
                style={isSearching ? {} : { opacity: 0 }}
              />

              <Button
                type="submit"
                iconOnly
                icon={MdSearch}
                color="neutral"
                variant="ghost"
              />
            </div>
          )}
        </SearchForm>
      </Header>

      <ul>
        {messages.map(({ id, name, email, subject, linkedin, read }, index) => (
          <ListItem key={id} isActive={selectedMessage === index} isRead={read}>
            <div className="info">
              <h4>
                <span>{name}</span>
                <span>({email})</span>
              </h4>

              {subject && <p>{subject}</p>}

              <button
                type="button"
                aria-label="Ver mensagem"
                onClick={() => showMessage(index)}
              >
                Ver mensagem
              </button>
            </div>

            <div className="extra-actions">
              {linkedin && (
                <Link
                  color="secondary"
                  to={linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </Link>
              )}

              <div className="extra-actions__buttons">
                <Button
                  iconOnly
                  icon={RiInboxArchiveLine}
                  color="secondary"
                  variant="outline"
                  size="small"
                />
                <Button
                  iconOnly
                  icon={RiCloseLine}
                  color="danger"
                  variant="outline"
                  size="small"
                />
              </div>
            </div>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default MailList;

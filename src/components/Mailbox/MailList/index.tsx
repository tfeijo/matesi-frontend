import { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { MdChevronLeft, MdSearch, MdUndo } from 'react-icons/md';
import {
  RiCloseLine,
  RiDeleteBin2Line,
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
} from 'react-icons/ri';

import { useMailbox } from '../../../context/MailboxContext';

import Button from '../../Button';
import Input from '../../Input';
import Link from '../../Link';

import { Container, Header, SearchForm, ListItem, LoadMore } from './styles';
import useBreakpoints from '../../../hooks/useBreakpoints';

const MailList: React.FC = () => {
  const {
    messages,
    selectedMessage,
    boxName,
    paginationInfo,
    selectMessage,
    toggleMessage,
    setMessageAsRead,
    toggleMessageAsArchived,
    toggleMessageAsDeleted,
    permanentDeleteMessage,
    handleLoadNextPage,
  } = useMailbox();
  const searchFormRef = useRef<FormHandles>(null);
  const [isSearching, setIsSearching] = useState(false);

  const { isTabletLandscapeUp } = useBreakpoints();

  const handleClickMessage = (index: number) => {
    selectMessage(index);
    if (!isTabletLandscapeUp) toggleMessage(true);

    setMessageAsRead(index);
  };

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const ArchiveIcon =
    boxName === 'archives' ? RiInboxUnarchiveLine : RiInboxArchiveLine;

  const SoftDeleteIcon = boxName === 'deletes' ? MdUndo : RiCloseLine;
  const softDeleteColor = boxName === 'deletes' ? 'neutral' : 'danger';

  return (
    <Container>
      <Header isSearching={isSearching}>
        <h2>
          {paginationInfo.totalRegisters}{' '}
          {paginationInfo.totalRegisters === 1 ? 'Mensagem' : 'Mensagens'}
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
        {messages.map(
          (
            { id, firstName, lastName, email, subject, linkedin, isRead },
            index,
          ) => (
            <ListItem
              key={id}
              isActive={selectedMessage === index}
              isRead={isRead}
            >
              <div className="info">
                <h4>
                  <span>
                    {firstName} {lastName}
                  </span>
                  <span>({email})</span>
                </h4>

                {subject && <p>{subject}</p>}

                <button
                  type="button"
                  aria-label="Ver mensagem"
                  onClick={() => handleClickMessage(index)}
                >
                  Ver mensagem
                </button>
              </div>

              <div className="extra-actions">
                {linkedin && (
                  <Link color="secondary" external href={linkedin}>
                    LinkedIn
                  </Link>
                )}

                <div className="extra-actions__buttons">
                  <Button
                    iconOnly
                    icon={ArchiveIcon}
                    color="secondary"
                    variant="outline"
                    size="small"
                    onClick={() => toggleMessageAsArchived(id, index)}
                  />
                  <Button
                    iconOnly
                    icon={SoftDeleteIcon}
                    color={softDeleteColor}
                    variant="outline"
                    size="small"
                    onClick={() => toggleMessageAsDeleted(id, index)}
                  />

                  {boxName === 'deletes' && (
                    <Button
                      iconOnly
                      icon={RiDeleteBin2Line}
                      color="danger"
                      variant="outline"
                      size="small"
                      onClick={() => permanentDeleteMessage(id, index)}
                    />
                  )}
                </div>
              </div>
            </ListItem>
          ),
        )}
      </ul>

      {messages.length === 0 ||
        paginationInfo.page === paginationInfo.lastPage || (
          <LoadMore>
            <Button
              variant="outline"
              color="neutral"
              onClick={() => handleLoadNextPage()}
            >
              Carregar mais
            </Button>
          </LoadMore>
        )}
    </Container>
  );
};

export default MailList;

import { useContext, useRef } from 'react';
import {
  RiCloseLine,
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
} from 'react-icons/ri';
import { MdChevronLeft, MdUndo } from 'react-icons/md';

import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { MailboxContext } from '../../../context/MailboxContext';

import Link from '../../Link';
import Button from '../../Button';

import { Container, BackButton, Main, Message, Actions } from './styles';
import Checkbox from '../../Checkbox';

const MailDetail: React.FC = ({ children }) => {
  const formRef = useRef<FormHandles>(null);

  const {
    messages,
    selectedMessage,
    isMessageOpen,
    boxName,
    toggleMessage,
    toggleMessageAsContacted,
    toggleMessageAsArchived,
    toggleMessageAsDeleted,
  } = useContext(MailboxContext);

  const message = messages[selectedMessage];

  const handleSubmit: SubmitHandler<{ contacted: boolean }> = data => {
    toggleMessageAsContacted(data.contacted);
  };

  function handleArchiveMessage() {
    toggleMessageAsArchived(message.id, selectedMessage);
  }

  function handleDeleteMessage() {
    toggleMessageAsDeleted(message.id, selectedMessage);
  }

  const ArchiveIcon =
    boxName === 'archives' ? RiInboxUnarchiveLine : RiInboxArchiveLine;

  const DeleteIcon = boxName === 'deletes' ? MdUndo : RiCloseLine;

  return (
    <Container isOpen={isMessageOpen}>
      {selectedMessage >= 0 && (
        <>
          <BackButton onClick={() => toggleMessage()}>
            <MdChevronLeft size={24} />
            Voltar
          </BackButton>

          <Main>
            <Message>
              <h3>{message.subject}</h3>

              <div className="about">
                <h4>{message.name}</h4>
                <span>
                  {message.email} - {message.phone}
                </span>
              </div>

              {message.message && <p>{message.message}</p>}

              {message.linkedin && (
                <Link color="secondary" external href={message.linkedin}>
                  LinkedIn
                </Link>
              )}
            </Message>

            <Actions>
              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                initialData={{
                  contacted: message.contacted,
                }}
              >
                <Checkbox
                  key={Math.random()}
                  label="Contacted"
                  name="contacted"
                  onChange={() => formRef.current?.submitForm()}
                />
              </Form>

              <div className="buttons">
                <Button
                  icon={ArchiveIcon}
                  color="secondary"
                  variant="outline"
                  size="small"
                  onClick={handleArchiveMessage}
                >
                  {boxName === 'archives' ? 'Desarquivar' : 'Arquivar'}
                </Button>
                <Button
                  icon={DeleteIcon}
                  color="danger"
                  variant="outline"
                  size="small"
                  onClick={handleDeleteMessage}
                >
                  {boxName === 'deletes' ? 'Restaurar' : 'Excluir'}
                </Button>
              </div>
            </Actions>

            {children}
          </Main>
        </>
      )}
    </Container>
  );
};

export default MailDetail;

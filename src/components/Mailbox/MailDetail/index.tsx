import { useRef, useState } from 'react';
import {
  RiCloseLine,
  RiDeleteBin2Line,
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
} from 'react-icons/ri';
import { MdChevronLeft, MdUndo } from 'react-icons/md';

import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import Link from '../../Link';
import Button from '../../Button';

import {
  Container,
  BackButton,
  Main,
  Message,
  Actions,
  UserAlreadyRegisteredContainer,
} from './styles';
import Checkbox from '../../Checkbox';
import { useMailbox } from '../../../context/MailboxContext';
import { ConfirmDeleteModal } from '../ConfirmDeleteModal';

const MailDetail: React.FC = ({ children }) => {
  const formRef = useRef<FormHandles>(null);
  const [
    isConfirmPermanentDeleteModalOpen,
    setIsConfirmPermanentDeleteModalOpen,
  ] = useState(false);

  function openConfirmPermanentDeleteModal() {
    setIsConfirmPermanentDeleteModalOpen(true);
  }

  function closeConfirmPermanentDeleteModal() {
    setIsConfirmPermanentDeleteModalOpen(false);
  }

  const {
    messages,
    selectedMessage,
    isMessageOpen,
    boxName,
    toggleMessage,
    toggleMessageAsContacted,
    toggleMessageAsArchived,
    toggleMessageAsDeleted,
    permanentDeleteMessage,
  } = useMailbox();

  const message = messages[selectedMessage];

  const handleSubmit: SubmitHandler<{ contacted: boolean }> = data => {
    toggleMessageAsContacted(data.contacted);
  };

  function handleArchiveMessage() {
    toggleMessageAsArchived(message.id, selectedMessage);
  }

  function handleDeleteMessage() {
    toggleMessage(false);
    toggleMessageAsDeleted(message.id, selectedMessage);
  }

  function handlePermanentDeleteMessage() {
    permanentDeleteMessage(message.id, selectedMessage);
  }

  const ArchiveIcon =
    boxName === 'archives' ? RiInboxUnarchiveLine : RiInboxArchiveLine;

  const SoftDeleteIcon = boxName === 'deletes' ? MdUndo : RiCloseLine;
  const softDeleteColor = boxName === 'deletes' ? 'neutral' : 'danger';

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
                <h4>{`${message.firstName} ${message.lastName}`}</h4>
                <span>
                  {message.email} - {message.phone}
                </span>

                <small>
                  {Intl.DateTimeFormat('pt-BR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric',
                    minute: 'numeric',
                  }).format(new Date(message.created_at))}
                </small>
              </div>

              {message.message && <p className="message">{message.message}</p>}

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
                  contacted: message.isContact,
                }}
              >
                <Checkbox
                  key={Math.random()}
                  label="Contato realizado"
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
                  icon={SoftDeleteIcon}
                  color={softDeleteColor}
                  variant="outline"
                  size="small"
                  onClick={handleDeleteMessage}
                >
                  {boxName === 'deletes' ? 'Restaurar' : 'Excluir'}
                </Button>
                {boxName === 'deletes' && (
                  <>
                    <Button
                      icon={RiDeleteBin2Line}
                      color="danger"
                      variant="outline"
                      size="small"
                      onClick={openConfirmPermanentDeleteModal}
                    >
                      Excluir
                    </Button>

                    <ConfirmDeleteModal
                      isOpen={isConfirmPermanentDeleteModalOpen}
                      onRequestClose={closeConfirmPermanentDeleteModal}
                      deleteFunction={handlePermanentDeleteMessage}
                    />
                  </>
                )}
              </div>
            </Actions>

            {message.isConfirmed && (
              <UserAlreadyRegisteredContainer>
                Usuário matriculado
              </UserAlreadyRegisteredContainer>
            )}

            {children}
          </Main>
        </>
      )}
    </Container>
  );
};

export default MailDetail;

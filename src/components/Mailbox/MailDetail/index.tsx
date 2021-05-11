import { useCallback, useContext, useRef } from 'react';
import { RiCloseLine, RiInboxArchiveLine } from 'react-icons/ri';
import { MdChevronLeft } from 'react-icons/md';

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
    toggleMessage,
    setActiveMessageState,
  } = useContext(MailboxContext);

  const message = messages[selectedMessage];

  const handleSubmit: SubmitHandler<{
    contacted: boolean;
  }> = useCallback(
    data => {
      // const formData = { id: message?.id, ...data };

      setActiveMessageState({
        ...message,
        contacted: data.contacted,
      });
    },
    [message, setActiveMessageState],
  );

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

              {message.message && <p>message.message</p>}

              {message.linkedin && (
                <Link
                  color="secondary"
                  to={message.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
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
                  icon={RiInboxArchiveLine}
                  color="secondary"
                  variant="outline"
                  size="small"
                >
                  Arquivar
                </Button>
                <Button
                  icon={RiCloseLine}
                  color="danger"
                  variant="outline"
                  size="small"
                >
                  Excluir
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

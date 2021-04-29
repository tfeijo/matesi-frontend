import { useContext } from 'react';
import { RiCloseLine, RiInboxArchiveLine } from 'react-icons/ri';
import { MdChevronLeft } from 'react-icons/md';

import { MailboxContext } from '../../../context/MailboxContext';

import Link from '../../Link';
import Button from '../../Button';

import { Container, BackButton, Main, Message, Actions } from './styles';

const MailDetail: React.FC = ({ children }) => {
  const {
    messages,
    selectedMessage,
    isMessageOpen,
    toggleMessage,
  } = useContext(MailboxContext);

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
              <h3>{messages[selectedMessage].subject}</h3>

              <div className="about">
                <h4>{messages[selectedMessage].name}</h4>
                <span>
                  {messages[selectedMessage].email} -{' '}
                  {messages[selectedMessage].phone}
                </span>
              </div>

              {messages[selectedMessage].message && (
                <p>messages[selectedMessage].message</p>
              )}

              {messages[selectedMessage].linkedin && (
                <Link
                  color="secondary"
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  to={messages[selectedMessage].linkedin!}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </Link>
              )}
            </Message>

            <Actions>
              <label htmlFor="contacted">
                <input
                  type="checkbox"
                  id="contacted"
                  name="contacted"
                  checked={messages[selectedMessage].contacted}
                />
                Contato realizado
              </label>

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

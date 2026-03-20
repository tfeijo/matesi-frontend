import MailboxRoutes from '../../../routes/mailbox.routes';
import MailSidebar from '../../../components/Mailbox/MailSidebar';

import { Container, Main } from './styles';

const Mailbox: React.FC = () => {
  return (
    <Container>
      <MailSidebar />

      <Main>
        <MailboxRoutes />
      </Main>
    </Container>
  );
};

export default Mailbox;

import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import { MailboxProvider } from '../../../../context/MailboxContext';

const MESSAGES = [
  {
    id: '1',
    name: 'Candidato',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Um assunto caso tenha',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: 'https://linkedin.com',
    contacted: false,
    read: false,
  },
  {
    id: '2',
    name: 'Candidato 2',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Um assunto caso tenha',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: 'http://linkedin.com',
    contacted: false,
    read: false,
  },
  {
    id: '3',
    name: 'Candidato 3',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Um assunto caso tenha',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: 'http://linkedin.com',
    contacted: true,
    read: true,
  },
  {
    id: '4',
    name: 'Candidato 4',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Um assunto caso tenha',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: 'http://linkedin.com',
    contacted: false,
    read: false,
  },
  {
    id: '5',
    name: 'Candidato 5',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Um assunto caso tenha',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: 'http://linkedin.com',
    contacted: false,
    read: true,
  },
];

const WorkingUsMailbox: React.FC = () => {
  return (
    <MailboxProvider messages={MESSAGES}>
      <div>
        <MailList />
        <MailDetail />
      </div>
    </MailboxProvider>
  );
};

export default WorkingUsMailbox;

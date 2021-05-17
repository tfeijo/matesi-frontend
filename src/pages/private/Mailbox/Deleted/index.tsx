import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import { MailboxProvider } from '../../../../context/MailboxContext';

const MESSAGES = [
  {
    id: '1',
    name: 'Pessoa',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Qual a sua dúvida',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: '',
    contacted: false,
    read: false,
  },
  {
    id: '2',
    name: 'Pessoa 2',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Qual a sua dúvida',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: '',
    contacted: false,
    read: false,
  },
  {
    id: '3',
    name: 'Pessoa 3',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Qual a sua dúvida',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: '',
    contacted: true,
    read: true,
  },
  {
    id: '4',
    name: 'Pessoa 4',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Qual a sua dúvida',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: '',
    contacted: false,
    read: false,
  },
  {
    id: '5',
    name: 'Pessoa 5',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Qual a sua dúvida',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error reiciendis ut quis repudiandae eaque quaerat? Accusantium fugiat laboriosam blanditiis.',
    linkedin: '',
    contacted: false,
    read: true,
  },
];

const Deleted: React.FC = () => {
  return (
    <MailboxProvider messages={MESSAGES}>
      <div>
        <MailList />
        <MailDetail />
      </div>
    </MailboxProvider>
  );
};

export default Deleted;

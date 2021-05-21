import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../../../components/Loader';
import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import { MailboxProvider } from '../../../../context/MailboxContext';
import api from '../../../../services/api';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  read: boolean;
  contacted: boolean;
}

type MessageResponse = Omit<Message, 'read' | 'contacted' | 'message'> & {
  isRead: boolean;
  isContact: boolean;
  about_me: string;
};

const WorkingUsMailbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function loadMessages() {
      const { data } = await api.get<MessageResponse[]>('work_with_us');

      const formattedData = data.map(
        ({ isContact, isRead, about_me, ...rest }) => ({
          read: isRead,
          contacted: isContact,
          message: about_me,
          ...rest,
        }),
      );

      setMessages(formattedData);
    }

    try {
      loadMessages();
    } catch (error) {
      toast.error('Um erro inesperado ocorreu. Por favor, tente novamente.');
    }
  }, []);

  if (messages.length === 0) return <Loader size={48} />;

  return (
    <MailboxProvider messages={messages} boxName="work_with_us">
      <div>
        <MailList />
        <MailDetail />
      </div>
    </MailboxProvider>
  );
};

export default WorkingUsMailbox;

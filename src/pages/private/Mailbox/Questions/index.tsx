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
  subject: string;
  message: string;
  read: boolean;
  contacted: boolean;
}

type MessageResponse = Omit<Message, 'read' | 'contacted'> & {
  isRead: boolean;
  isContact: boolean;
};

const Questions: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function loadMessages() {
      const { data } = await api.get<MessageResponse[]>('questions');

      const formattedData = data.map(({ isContact, isRead, ...rest }) => ({
        read: isRead,
        contacted: isContact,
        ...rest,
      }));

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
    <MailboxProvider messages={messages} boxName="questions">
      <div>
        <MailList />
        <MailDetail />
      </div>
    </MailboxProvider>
  );
};

export default Questions;

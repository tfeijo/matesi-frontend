import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../../../components/Loader';
import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import { MailboxProvider } from '../../../../context/MailboxContext';
import api from '../../../../services/api';

type TCourse = { id: string; name: string };

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  linkedin?: string;
  message?: string;
  read: boolean;
  contacted: boolean;
  courses?: Array<TCourse>;
}

type MessageResponse = Omit<Message, 'read' | 'contacted'> & {
  isRead: boolean;
  isContact: boolean;
  about_me?: string;
};

const Archived: React.FC = () => {
  const [messages, setMessages] = useState<Message[] | null>(null);

  useEffect(() => {
    async function loadMessages() {
      const { data } = await api.get<MessageResponse[]>('archives');

      const formattedData = data.map(
        ({ isContact, isRead, courses, about_me, message, ...rest }) => {
          const sharedData = {
            read: isRead,
            contacted: isContact,
            ...rest,
          };

          if (courses) {
            const coursesRegistered = courses
              .map(course => course.name)
              .join(', ')
              .trimEnd();

            return {
              subject: `Pré-matricula para o(s) curso(s): ${coursesRegistered}.`,
              courses,
              originBox: 'registrations',
              ...sharedData,
            };
          }

          return {
            ...sharedData,
            message: about_me || message,
            originBox: about_me ? 'work_with_us' : 'questions',
          };
        },
      );

      setMessages(formattedData);
    }

    try {
      loadMessages();
    } catch (error) {
      toast.error('Um erro inesperado ocorreu. Por favor, tente novamente.');
    }
  }, []);

  if (messages === null) return <Loader size={48} />;

  return (
    <MailboxProvider messages={messages} boxName="archives">
      <div>
        <MailList />
        <MailDetail />
      </div>
    </MailboxProvider>
  );
};

export default Archived;

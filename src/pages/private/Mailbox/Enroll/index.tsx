import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Loader from '../../../../components/Loader';
import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import { MailboxProvider } from '../../../../context/MailboxContext';
import { ConfirmationForm } from './ConfirmationForm';

import api from '../../../../services/api';

type TCourse = { id: string; name: string };

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  read: boolean;
  contacted: boolean;
  courses: Array<TCourse>;
}

type MessageResponse = Omit<Message, 'read' | 'contacted' | 'subject'> & {
  isRead: boolean;
  isContact: boolean;
};

const EnrollMailbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [allCourses, setAllCourses] = useState<TCourse[]>([]);

  useEffect(() => {
    async function loadMessages() {
      const { data } = await api.get<MessageResponse[]>('registrations');

      const formattedData = data.map(
        ({ isContact, isRead, courses, ...rest }) => {
          const coursesRegistered = courses
            .map(course => course.name)
            .join(', ')
            .trimEnd();

          return {
            read: isRead,
            contacted: isContact,
            subject: `Pré-matricula para o(s) curso(s): ${coursesRegistered}.`,
            courses,
            ...rest,
          };
        },
      );

      setMessages(formattedData);
    }

    async function loadCourses() {
      const { data } = await api.get('courses');
      setAllCourses(data);
    }

    try {
      loadMessages();
      loadCourses();
    } catch (error) {
      toast.error('Um erro inesperado ocorreu. Por favor, tente novamente.');
    }
  }, []);

  if (messages.length === 0) return <Loader />;

  return (
    <MailboxProvider messages={messages} boxName="registrations">
      <div>
        <MailList />
        <MailDetail>
          {allCourses.length > 0 && (
            <ConfirmationForm allCourses={allCourses} />
          )}
        </MailDetail>
      </div>
    </MailboxProvider>
  );
};

export default EnrollMailbox;

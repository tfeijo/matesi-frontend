import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../../../components/Button';
import CourseCheckboxGroup from '../../../../components/CourseCheckboxGroup';
import Loader from '../../../../components/Loader';

import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import {
  MailboxContext,
  MailboxProvider,
} from '../../../../context/MailboxContext';
import api from '../../../../services/api';

import { ConfirmMessageContainer } from './styles';

type TCourse = { id: number; name: string };

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

const EnrollConfirmationForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { messages, selectedMessage } = useContext(MailboxContext);

  if (selectedMessage < 0) return null;

  return (
    <ConfirmMessageContainer>
      <h1>
        Matricular <span>{messages[selectedMessage].name}</span>
      </h1>
      <p>Confirme os idiomas a matricular o aluno.</p>

      <Form ref={formRef} onSubmit={data => console.log(data)}>
        {/* <CourseCheckboxGroup /> */}

        <Button type="submit">Efetuar matrícula</Button>
      </Form>
    </ConfirmMessageContainer>
  );
};

const EnrollMailbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

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

    try {
      loadMessages();
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
          <EnrollConfirmationForm />
        </MailDetail>
      </div>
    </MailboxProvider>
  );
};

export default EnrollMailbox;

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useContext, useRef } from 'react';
import Button from '../../../../components/Button';
import CourseCheckboxGroup from '../../../../components/CourseCheckboxGroup';

import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import {
  MailboxContext,
  MailboxProvider,
} from '../../../../context/MailboxContext';

import { ConfirmMessageContainer } from './styles';

const MESSAGES = [
  {
    id: '1',
    name: 'Nome da pessoa',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Pré-matriculo para os cursos: inglês e francês.',
    message: '',
    linkedin: '',
    contacted: false,
    read: false,
    courses: [{ id: 1, name: 'german' }],
  },
  {
    id: '2',
    name: 'Nome da pessoa 2',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Pré-matriculo para os cursos: inglês e francês.',
    message: '',
    linkedin: '',
    contacted: false,
    read: false,
    courses: [
      { id: 1, name: 'english' },
      { id: 2, name: 'spanish' },
    ],
  },
  {
    id: '3',
    name: 'Nome da pessoa 3',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Pré-matriculo para os cursos: inglês e francês.',
    message: '',
    linkedin: '',
    contacted: true,
    read: true,
    courses: [
      { id: 1, name: 'french' },
      { id: 2, name: 'spanish' },
      { id: 3, name: 'korean' },
    ],
  },
  {
    id: '4',
    name: 'Nome da pessoa 4',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Pré-matriculo para os cursos: inglês e francês.',
    message: '',
    linkedin: '',
    contacted: false,
    read: false,
    courses: [
      { id: 1, name: 'english' },
      { id: 2, name: 'korean' },
      { id: 3, name: 'german' },
      { id: 4, name: 'french' },
    ],
  },
  {
    id: '5',
    name: 'Nome da pessoa 5',
    email: 'email@email.com',
    phone: '24988776655',
    subject: 'Pré-matriculo para os cursos: inglês e francês.',
    message: '',
    linkedin: '',
    contacted: false,
    read: true,
    courses: [
      { id: 1, name: 'korean' },
      { id: 2, name: 'spanish' },
      { id: 3, name: 'german' },
      { id: 4, name: 'english' },
      { id: 5, name: 'french' },
    ],
  },
];

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
  return (
    <MailboxProvider messages={MESSAGES}>
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

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useContext, useRef } from 'react';

import Button from '../../../../../components/Button';
import CourseCheckboxGroup from '../../../../../components/CourseCheckboxGroup';
import { MailboxContext } from '../../../../../context/MailboxContext';

import { ConfirmMessageContainer } from './styles';

type TCourse = { id: string; name: string };

interface EnrollConfirmationFormProps {
  allCourses: TCourse[];
}

export const ConfirmationForm: React.FC<EnrollConfirmationFormProps> = ({
  allCourses,
}) => {
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
        <CourseCheckboxGroup courses={allCourses} />

        <Button type="submit">Efetuar matrícula</Button>
      </Form>
    </ConfirmMessageContainer>
  );
};

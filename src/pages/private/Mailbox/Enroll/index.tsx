import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import { ConfirmationForm } from './ConfirmationForm';

import api from '../../../../services/api';
import { TDataFormatterFunction } from '../../../../types/mailbox';
import { MailboxProvider } from '../../../../context/MailboxContext';

type TCourse = { id: string; name: string };

const EnrollMailbox: React.FC = () => {
  const [allCourses, setAllCourses] = useState<TCourse[]>([]);

  useEffect(() => {
    async function loadCourses() {
      const { data } = await api.get('courses');
      setAllCourses(data);
    }

    try {
      loadCourses();
    } catch (error) {
      toast.error('Um erro inesperado ocorreu. Por favor, tente novamente.');
    }
  }, []);

  const handleFormatData: TDataFormatterFunction = ({
    data,
    last_page,
    page,
    total,
  }) => {
    const messages = data.map(({ first_name, last_name, courses, ...rest }) => {
      const coursesRegistered = courses
        ?.map(course => course.name)
        .join(', ')
        .trimEnd();

      const s = courses!.length > 1 ? 's' : '';

      return {
        firstName: first_name,
        lastName: last_name,
        subject: `Pré-matricula para o${s} curso${s}: ${coursesRegistered}.`,
        courses,
        ...rest,
      };
    });

    return {
      messages,
      paginationInfo: {
        lastPage: last_page,
        page,
        totalRegisters: total,
      },
    };
  };

  return (
    <MailboxProvider boxName="registrations" dataFormatter={handleFormatData}>
      <div>
        <MailList />
        <MailDetail>
          {/* {allCourses.length > 0 && (
            <ConfirmationForm allCourses={allCourses} />
          )} */}
        </MailDetail>
      </div>
    </MailboxProvider>
  );
};

export default EnrollMailbox;

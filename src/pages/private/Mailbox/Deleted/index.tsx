import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import { MailboxProvider } from '../../../../context/MailboxContext';
import {
  EMessageType,
  TDataFormatterFunction,
} from '../../../../types/mailbox';

const Deleted: React.FC = () => {
  const handleFormatData: TDataFormatterFunction = ({
    data,
    last_page,
    page,
    total,
  }) => {
    const messages = data.map(
      ({ first_name, last_name, about_me, message, courses, ...rest }) => {
        const sharedData = {
          firstName: first_name,
          lastName: last_name,
          ...rest,
        };

        if (courses) {
          const coursesRegistered = courses
            .map(course => course.name)
            .join(', ')
            .trimEnd();

          const s = courses!.length > 1 ? 's' : '';

          return {
            ...sharedData,
            subject: `Pré-matricula para o${s} curso${s}: ${coursesRegistered}.`,
            courses,
            type: EMessageType.registrations,
            ...rest,
          };
        }

        return {
          ...sharedData,
          message: about_me || message,
          type: about_me ? EMessageType.work_with_us : EMessageType.questions,
        };
      },
    );

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
    <MailboxProvider boxName="deletes" dataFormatter={handleFormatData}>
      <div>
        <MailList />
        <MailDetail />
      </div>
    </MailboxProvider>
  );
};

export default Deleted;

import MailDetail from '../../../../components/Mailbox/MailDetail';
import MailList from '../../../../components/Mailbox/MailList';
import { MailboxProvider } from '../../../../context/MailboxContext';
import { TDataFormatterFunction } from '../../../../types/mailbox';

const WorkingUsMailbox: React.FC = () => {
  const handleFormatData: TDataFormatterFunction = ({
    data,
    last_page,
    page,
    total,
  }) => {
    const messages = data.map(
      ({ first_name, last_name, about_me, ...rest }) => ({
        firstName: first_name,
        lastName: last_name,
        message: about_me,
        ...rest,
      }),
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
    <MailboxProvider boxName="work_with_us" dataFormatter={handleFormatData}>
      <div>
        <MailList />
        <MailDetail />
      </div>
    </MailboxProvider>
  );
};

export default WorkingUsMailbox;

import { createContext, useState } from 'react';

type TCourse = { id: number; name: string };

export type TMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
  linkedin?: string;
  contacted: boolean;
  read: boolean;
  courses: Array<TCourse>;
};

type TProps = { messages: Array<TMessage> };

type TMailboxContent = {
  messages: Array<TMessage>;
  selectedMessage: number;
  selectMessage: (index: number) => void;
  isMessageOpen: boolean;
  toggleMessage: (open?: boolean) => void;
};

const MailboxContext = createContext<TMailboxContent>({} as TMailboxContent);

const MailboxProvider: React.FC<TProps> = ({ messages, children }) => {
  const [selectedMessage, setSelectedMessage] = useState(-1);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const selectMessage = (index: number) => {
    setSelectedMessage(index);
  };

  const toggleMessage = (open?: boolean) => {
    if (open !== undefined) setIsMessageOpen(open);
    setIsMessageOpen(!isMessageOpen);
  };

  return (
    <MailboxContext.Provider
      value={{
        messages,
        selectedMessage,
        selectMessage,
        isMessageOpen,
        toggleMessage,
      }}
    >
      {children}
    </MailboxContext.Provider>
  );
};

export { MailboxContext, MailboxProvider };

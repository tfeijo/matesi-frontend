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
  courses?: Array<TCourse>;
};

type TProps = { messages: Array<TMessage> };

type TMailboxContent = {
  messages: Array<TMessage>;
  setActiveMessageState: (updatedMessage: TMessage) => void;
  selectedMessage: number;
  selectMessage: (index: number) => void;
  isMessageOpen: boolean;
  toggleMessage: (open?: boolean) => void;
};

const MailboxContext = createContext<TMailboxContent>({} as TMailboxContent);

const MailboxProvider: React.FC<TProps> = ({
  messages: initialMessages,
  children,
}) => {
  const [selectedMessage, setSelectedMessage] = useState(-1);
  const [messages, setMessages] = useState(initialMessages);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const selectMessage = (index: number) => {
    setSelectedMessage(index);
  };

  const toggleMessage = (open?: boolean) => {
    if (open !== undefined) setIsMessageOpen(open);
    setIsMessageOpen(!isMessageOpen);
  };

  const setActiveMessageState = (updatedMessage: TMessage) => {
    const updatedMessages = messages.map((message, index) => {
      if (selectedMessage === index) return updatedMessage;
      return message;
    });

    setMessages(updatedMessages);
  };

  return (
    <MailboxContext.Provider
      value={{
        messages,
        setActiveMessageState,
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

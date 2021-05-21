import { createContext, useState } from 'react';
import api from '../services/api';

type TCourse = { id: number; name: string };

type BoxName = 'registrations' | 'questions' | 'work_with_us';

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

type TProps = { messages: Array<TMessage>; boxName?: BoxName };

type TMailboxContent = {
  messages: Array<TMessage>;
  boxName?: BoxName;
  setActiveMessageState: (updatedMessage: TMessage) => void;
  selectedMessage: number;
  selectMessage: (index: number) => void;
  isMessageOpen: boolean;
  toggleMessage: (open?: boolean) => void;
  setMessageAsRead: (index: number) => Promise<void>;
  toggleMessageAsContacted: (contacted: boolean) => Promise<void>;
};

const MailboxContext = createContext<TMailboxContent>({} as TMailboxContent);

const MailboxProvider: React.FC<TProps> = ({
  messages: initialMessages,
  boxName,
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

  const setMessageAsRead = async (messageToRead: number) => {
    try {
      const { id, read } = messages[messageToRead];

      if (!boxName) return;
      if (read) return;

      await api.put(`${boxName}/read/${id}`);

      const updatedMessages = messages.map((message, index) => {
        if (messageToRead === index)
          return {
            ...message,
            read: true,
          };
        return message;
      });

      setMessages(updatedMessages);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMessageAsContacted = async (contacted: boolean) => {
    try {
      if (!boxName) return;

      const { id } = messages[selectedMessage];
      await api.put(`${boxName}/contact/${id}`);

      setActiveMessageState({
        ...messages[selectedMessage],
        contacted,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MailboxContext.Provider
      value={{
        messages,
        boxName,
        setActiveMessageState,
        selectedMessage,
        selectMessage,
        isMessageOpen,
        toggleMessage,
        setMessageAsRead,
        toggleMessageAsContacted,
      }}
    >
      {children}
    </MailboxContext.Provider>
  );
};

export { MailboxContext, MailboxProvider };

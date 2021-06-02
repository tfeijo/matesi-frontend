import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import api from '../services/api';
import {
  IMailboxContextData,
  IMailboxProviderProps,
  TMailboxAPIResponse,
  TMessage,
  TPaginationInfo,
} from '../types/mailbox';

const MailboxContext = createContext<IMailboxContextData>(
  {} as IMailboxContextData,
);

const MailboxProvider: React.FC<IMailboxProviderProps> = ({
  boxName,
  dataFormatter,
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<TPaginationInfo>(
    {} as TPaginationInfo,
  );
  const [selectedMessage, setSelectedMessage] = useState(-1);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get<TMailboxAPIResponse>(
        `${boxName}?search=${search}`,
      );
      const formattedData = dataFormatter(data);

      setPaginationInfo(formattedData.paginationInfo);
      setMessages(formattedData.messages);
      setIsLoading(false);
    }

    loadData();
  }, [boxName, dataFormatter, search]);

  if (isLoading)
    return <Loader size={48} style={{ width: '100%', height: '80vh' }} />;

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
      const { id, isRead, type } = messages[messageToRead];

      if (isRead) return;

      await api.put(`${type || boxName}/read/${id}`);

      const updatedMessages = messages.map((message, index) => {
        if (messageToRead === index)
          return {
            ...message,
            isRead: true,
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
      const { id, type } = messages[selectedMessage];

      await api.put(`${type || boxName}/contact/${id}`);

      setActiveMessageState({
        ...messages[selectedMessage],
        isContact: contacted,
      });
    } catch (error) {
      toast.error(
        'Um erro ocorreu ao marcar a mensagem como contactada. Por favor, tente novamente',
      );
      console.log(error);
    }
  };

  const toggleMessageAsArchived = async (id: string, indexToDelete: number) => {
    try {
      const { type } = messages[indexToDelete];

      await api.put(`${type || boxName}/archive/${id}`);

      const updatedMessages = messages.filter(message => message.id !== id);

      if (selectedMessage === indexToDelete) setSelectedMessage(-1);
      else if (indexToDelete < selectedMessage)
        setSelectedMessage(selectedMessage - 1);

      setMessages(updatedMessages);
      setPaginationInfo({
        ...paginationInfo,
        totalRegisters: paginationInfo.totalRegisters - 1,
      });
    } catch (error) {
      toast.error(
        'Um erro ocorreu ao arquivar a mensagem. Por favor, tente novamente',
      );
      console.log(error);
    }
  };

  const toggleMessageAsDeleted = async (id: string, indexToDelete: number) => {
    try {
      const { type } = messages[indexToDelete];

      await api.put(`${type || boxName}/soft_delete/${id}`);

      const updatedMessages = messages.filter(message => message.id !== id);

      if (selectedMessage === indexToDelete) setSelectedMessage(-1);
      else if (indexToDelete < selectedMessage)
        setSelectedMessage(selectedMessage - 1);

      setMessages(updatedMessages);
      setPaginationInfo({
        ...paginationInfo,
        totalRegisters: paginationInfo.totalRegisters - 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const permanentDeleteMessage = async (id: string, indexToDelete: number) => {
    try {
      const { type } = messages[indexToDelete];

      await api.delete(`${type || boxName}/delete/${id}`);

      const updatedMessages = messages.filter(message => message.id !== id);

      if (selectedMessage === indexToDelete) setSelectedMessage(-1);
      else if (indexToDelete < selectedMessage)
        setSelectedMessage(selectedMessage - 1);

      setMessages(updatedMessages);
      setPaginationInfo({
        ...paginationInfo,
        totalRegisters: paginationInfo.totalRegisters - 1,
      });
    } catch (error) {
      toast.error(
        'Um erro ocorreu ao excluir a mensagem. Por favor, tente novamente',
      );
      console.log(error);
    }
  };

  const handleLoadNextPage = async () => {
    const { page, lastPage } = paginationInfo;

    if (page === lastPage) return;

    try {
      const uri = `${boxName}?search=${search}&page=${page + 1}`;
      const { data } = await api.get<TMailboxAPIResponse>(uri);

      const formattedData = dataFormatter({
        ...data,
        page: Number(data.page),
      });

      setPaginationInfo({
        ...paginationInfo,
        page: formattedData.paginationInfo.page,
      });
      setMessages([...messages, ...formattedData.messages]);
    } catch (error) {
      toast.error(
        'Um erro ocorreu ao carregar as mensagens. Por favor, tente novamente',
      );
      console.log(error);
    }
  };

  const handleFilter = async (query: string) => {
    setSearch(query);
  };

  return (
    <MailboxContext.Provider
      value={{
        messages,
        boxName,
        paginationInfo,
        setActiveMessageState,
        selectedMessage,
        selectMessage,
        isMessageOpen,
        toggleMessage,
        setMessageAsRead,
        toggleMessageAsContacted,
        toggleMessageAsArchived,
        toggleMessageAsDeleted,
        permanentDeleteMessage,
        handleLoadNextPage,
        handleFilter,
      }}
    >
      {children}
    </MailboxContext.Provider>
  );
};

function useMailbox() {
  const context = useContext(MailboxContext);

  if (!context)
    throw new Error('useMailbox must be used within a MailboxProvider');

  return context;
}

export { MailboxProvider, useMailbox };

// eslint-disable-next-line no-shadow
export enum EMessageType {
  registrations = 'registrations',
  questions = 'questions',
  work_with_us = 'work_with_us',
}

type TBoxName = keyof typeof EMessageType | 'archives' | 'deletes';

type TMessageType = keyof typeof EMessageType;

type TCourse = { id: string; name: string };

export type TMessage = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
  linkedin?: string;
  isContact: boolean;
  isRead: boolean;
  isConfirmed?: boolean;
  courses?: Array<TCourse>;
  type?: TMessageType;
  created_at: string;
};

export type TPaginationInfo = {
  page: number;
  lastPage: number;
  totalRegisters: number;
};

type TResponseMessage = Omit<TMessage, 'firstName' | 'lastName'> & {
  about_me?: string;
  first_name: string;
  last_name: string;
};

export type TMailboxAPIResponse = {
  data: TResponseMessage[];
  page: number;
  last_page: number;
  total: number;
};

export type TDataFormatterFunction = (
  data: TMailboxAPIResponse,
) => {
  messages: TMessage[];
  paginationInfo: TPaginationInfo;
};

export interface IMailboxProviderProps {
  boxName: TBoxName;
  dataFormatter: TDataFormatterFunction;
}

export interface IMailboxContextData {
  messages: TMessage[];
  boxName: TBoxName;
  paginationInfo: TPaginationInfo;
  selectedMessage: number;
  isMessageOpen: boolean;
  setActiveMessageState: (updatedMessage: TMessage) => void;
  selectMessage: (index: number) => void;
  toggleMessage: (open?: boolean) => void;
  setMessageAsRead: (index: number) => Promise<void>;
  toggleMessageAsContacted: (contacted: boolean) => Promise<void>;
  toggleMessageAsArchived: (id: string, index: number) => Promise<void>;
  toggleMessageAsDeleted: (id: string, index: number) => Promise<void>;
  permanentDeleteMessage: (id: string, index: number) => Promise<void>;
  handleLoadNextPage: () => Promise<void>;
  handleFilter: (query: string) => void;
}

import { createContext, useCallback, useEffect, useState } from 'react';
import usePersistedState from '../hooks/usePersistedState';
import api from '../services/api';

type Credentials = {
  email: string;
  password: string;
};

type User = {
  name: string;
  email: string;
};

interface AuthContextValue {
  isSigned: boolean;
  isLoading: boolean;
  user: User | null;
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

const AuthProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = usePersistedState<User | null>('@matesi:user', null);
  const [token, setToken] = usePersistedState('@matesi:token', '');

  useEffect(() => {
    if (user && token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setIsLoading(false);
  }, []);

  const signIn = useCallback(
    async (credentials: Credentials) => {
      const { data } = await api.post('sessions', credentials);

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setUser(data.user);
      setToken(data.token);
    },
    [setToken, setUser],
  );

  const signOut = useCallback(() => {
    setUser(null);
    setToken('');
    api.defaults.headers.Authorization = undefined;
  }, [setToken, setUser]);

  return (
    <AuthContext.Provider
      value={{ isSigned: !!user, isLoading, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

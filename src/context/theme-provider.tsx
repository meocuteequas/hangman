import { ThemeProvider as Material } from '@mui/material';
import { ReactNode, createContext, useState } from 'react';
import { ThemeType, ThemeContextType, themeCreator } from '../libs/mui';

export const AppContext = createContext<ThemeContextType>({
  theme: 'natural',
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('natural');

  const app = themeCreator(theme);

  const toggleTheme = (theme: ThemeType) => setTheme(theme);

  return (
    <>
      <AppContext.Provider value={{ theme, toggleTheme }}>
        <Material theme={app}>{children}</Material>
      </AppContext.Provider>
    </>
  );
}

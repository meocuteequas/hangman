import { CssBaseline } from '@mui/material';
import ThemeProvider from './context/theme-provider';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const routeElements = useRoutes(routes);
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        {routeElements}
      </ThemeProvider>
    </>
  );
}

export default App;

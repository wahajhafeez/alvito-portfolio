import AppRoutes from '@/routes';
import { useThemeInit } from '@/hooks/useTheme';

const App = () => {
  useThemeInit();

  return <AppRoutes />;
};

export default App;

import AppRoutes from '@/routes';
import AnimatedCursor from '@/components/common/AnimatedCursor';
import { useThemeInit } from '@/hooks/useTheme';

const App = () => {
  useThemeInit();

  return (
    <>
      {/* AnimatedCursor uses raw DOM events, does not need Router context */}
      <AnimatedCursor />
      {/* All routing, CommandPalette (needs useNavigate), and pages */}
      <AppRoutes />
    </>
  );
};

export default App;

import { HashRouter } from 'react-router-dom';

import { AppTheme } from './theme';
import { Router } from './Router';

function App() {
  return (
    <AppTheme>
      <HashRouter>
        <Router />
      </HashRouter>
    </AppTheme>
  );
}

export default App;

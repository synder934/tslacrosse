import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import { createProtectedRoute } from './utils/CheckAuthRoute';
import { authService } from './services/auth';
import Account from './components/account';


function App() {
  const Protected = createProtectedRoute(authService.check, null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={Protected(<Account />)} />
        <Route path="/home" element={Protected(<Home />)} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
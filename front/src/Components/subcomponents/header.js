import React, { useContext } from 'react';
import { AuthContext } from '../../Assets/Context/auth';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { isLogged, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <header className="header">
      <h1 className="logo">blogger</h1>
      <nav className="nav">
        {isLogged ? (
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <button className="signin" onClick={handleRegisterRedirect}>
              Sign in
            </button>
            <button className="login" onClick={handleLoginRedirect}>
              Log in
            </button>
          </>
        )}
      </nav>
    </header>
  );
}


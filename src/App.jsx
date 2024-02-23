import React, { useState } from 'react';

function PasswordAuthenticator({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const authenticateWithPassword = () => {

    if (login === 'ivo' && senha === '123') {
      setAuthenticated(true);
      setMensagem('Autenticado com sucesso');
      console.log('Autenticação por senha bem-sucedida');
    } else {
      setMensagem('Credenciais inválidas');
      console.log('Credenciais inválidas');
    }
  };

  return authenticated ? children : (
    <div>
      <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={authenticateWithPassword}>Autenticar com Senha</button>
      <p>{mensagem}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Exemplo de Autenticação</h1>
      <PasswordAuthenticator>
        <h2>Usuário Autenticado</h2>
      </PasswordAuthenticator>
    </div>
  );
}

export default App;

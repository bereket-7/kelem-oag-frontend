
import React from 'react';
import Navbar from './components/Navbar.tsx'
import Login from './components/auth/Login.tsx'
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Login />
        {/* Other components and content go here */}
      </main>
    </div>
  );
};

export default App;

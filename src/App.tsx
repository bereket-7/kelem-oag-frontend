
// import React from 'react';
// import Navbar from './components/common/Navbar.tsx'
// import Login from './components/auth/Login.tsx'
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <main>
//         <Login />
//         {/* Other components and content go here */}
//       </main>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Navbar from './components/common/Navbar.tsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          {/* Define your routes here */}
          {/* Example Route */}
          {/* <Route exact path="/" component={Home} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

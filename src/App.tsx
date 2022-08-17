import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import { UserList } from './components/user-list.tsx/user-list';
import { nameList } from './components/user-list.tsx/user.interface';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserList names={nameList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

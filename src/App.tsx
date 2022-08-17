import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import PostList from './components/post-list/post-list';
import { UserList } from './components/user-list/user-list';
import { nameList } from './components/user-list/user.interface';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserList names={nameList} />} />
        <Route path="/post-users" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

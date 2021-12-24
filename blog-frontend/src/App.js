import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';


// app js 수정
function App() {
  return (
    <BrowserRouter>
        <Route path={['/@username', '/']} component={PostListPage} exact/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/Write" component={WritePage}/>
        <Route path="/PostPage" component={PostPage}/>
    </BrowserRouter>
  );
}

export default App;

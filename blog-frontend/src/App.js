import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';


// app js 수정
function App() {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <BrowserRouter>
          <Route path={['/@:username', '/']} component={PostListPage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/Write" component={WritePage}/>
          <Route path="/@:username/:postId" component={PostPage}/>
      </BrowserRouter>
    </>
  );
}

export default App;

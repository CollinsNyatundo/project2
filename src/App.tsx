import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import PostList from './components/admin/PostList';
import BlogEditor from './components/admin/BlogEditor';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Blog />
              <Contact />
            </>
          }
        />
        <Route path="/blog/:slug" element={<BlogDetail />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<PostList />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/new" element={<BlogEditor />} />
          <Route path="posts/:id/edit" element={<BlogEditor />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
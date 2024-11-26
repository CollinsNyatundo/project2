import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogEditor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = '/admin/index.html';
  }, []);

  return <div>Redirecting to Netlify CMS...</div>;
};

export default BlogEditor;
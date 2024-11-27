import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface BlogPostForm {
  title: string;
  excerpt: string;
  content: string;
  category: string;
}

const BlogEditor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BlogPostForm>();
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setCoverImage(acceptedFiles[0]);
    }
  });

  const onSubmit = async (data: BlogPostForm) => {
    try {
      console.log('Submitting post:', { ...data, coverImage });
      navigate('/admin/posts');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCursorPosition(e.target.selectionStart);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const { current: textarea } = textareaRef;
      textarea.style.setProperty('--cursor-position', `${cursorPosition}ch`);
    }
  }, [cursorPosition]);

  const inputClass = "w-full px-5 py-3 text-base text-white placeholder-gray-500 transition duration-500 ease-in-out transform bg-gray-800 border border-transparent rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-gray-900";
  const labelClass = "text-white text-sm font-bold mb-2";
  const errorClass = "mt-1 text-sm text-red-500";

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Create New Post</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="title" className={labelClass}>Title</label>
            <input
              {...register('title', { required: 'Title is required' })}
              type="text"
              className={inputClass}
            />
            {errors.title && <p className={errorClass}>{errors.title.message}</p>}
          </div>

          <div>
            <label htmlFor="category" className={labelClass}>Category</label>
            <select
              {...register('category', { required: 'Category is required' })}
              className={inputClass}
            >
              <option value="">Select a category</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Science">Data Science</option>
              <option value="Data Visualization">Data Visualization</option>
            </select>
            {errors.category && <p className={errorClass}>{errors.category.message}</p>}
          </div>

          <div>
            <label htmlFor="excerpt" className={labelClass}>Excerpt</label>
            <textarea
              {...register('excerpt', { required: 'Excerpt is required' })}
              rows={3}
              className={inputClass}
            />
            {errors.excerpt && <p className={errorClass}>{errors.excerpt.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Cover Image</label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 hover:border-purple-500'}
              `}
            >
              <input {...getInputProps()} />
              {coverImage ? (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(coverImage)}
                    alt="Cover preview"
                    className="max-h-48 mx-auto rounded"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCoverImage(null);
                    }}
                    className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="text-gray-400">
                  <Upload className="w-8 h-8 mx-auto mb-2" />
                  <p>Drag & drop an image here, or click to select</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="content" className={labelClass}>Content</label>
            <textarea
              {...register('content', { required: 'Content is required' })}
              rows={12}
              ref={textareaRef}
              onChange={handleContentChange}
              onSelect={handleContentChange}
              className={`${inputClass} font-mono resize-none`}
              placeholder="Write your blog post content here..."
            />
            {errors.content && <p className={errorClass}>{errors.content.message}</p>}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/admin/posts')}
              className="px-6 py-3 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
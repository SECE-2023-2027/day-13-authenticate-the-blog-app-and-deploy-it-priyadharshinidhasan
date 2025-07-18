'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getBlogs, deleteBlog, updateBlog } from '../api/blogs';

export default function BlogList() {
  const [blogList, setBlogList] = useState(getBlogs());

  const handleDelete = (id: string) => {
    deleteBlog(id);
    setBlogList(getBlogs());
  };

  const handleEdit = (id: string) => {
    const newTitle = prompt('Enter new title:');
    const newContent = prompt('Enter new content:');
    if (newTitle && newContent) {
      updateBlog(id, newTitle, newContent);
      setBlogList(getBlogs());
    }
  };

  return (
    <ul>
      {blogList.map((blog) => (
        <li key={blog.id}>
          <Link href={`/user/${blog.id}`}>{blog.title}</Link>
          <button onClick={() => handleEdit(blog.id)}>Edit</button>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

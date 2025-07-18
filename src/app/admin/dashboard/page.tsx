'use client';

import { getBlogs } from '../../../api/blogs';

export default function AdminDashboard() {
  const blogs = getBlogs();

  return (
    <main className="dashboard">
      <h1>Admin Dashboard</h1>
      <h2>All Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="buttons">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .dashboard {
          max-width: 800px;
          margin: auto;
          padding: 2rem;
          font-family: Arial, sans-serif;
          background-color: #f0f4f8;
        }

        .blog-list {
          display: grid;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .blog-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .blog-card h3 {
          margin: 0 0 0.5rem;
        }

        .blog-card p {
          color: #555;
        }

        .buttons {
          margin-top: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .edit-btn,
        .delete-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
        }

        .edit-btn {
          background-color: #0070f3;
          color: white;
        }

        .delete-btn {
          background-color: #f44336;
          color: white;
        }

        .edit-btn:hover {
          background-color: #0058c9;
        }

        .delete-btn:hover {
          background-color: #d32f2f;
        }
      `}</style>
    </main>
  );
}

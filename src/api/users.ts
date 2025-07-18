export interface User {
  id: string;
  username: string;
  role: 'admin' | 'user';
}

export const users: User[] = [
  { id: '1', username: 'admin', role: 'admin' },
  { id: '2', username: 'demo', role: 'user' },
];


// api/blogs.ts
export const getBlogs = () => [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog.' },
  { id: 2, title: 'Second Blog', content: 'Insights and updates in this blog post.' },
  { id: 3, title: 'Third Entry', content: 'Thoughts, ideas, and more.' },
];

// Add more user functions if needed.

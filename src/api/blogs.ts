import { v4 as uuidv4 } from 'uuid';

export interface Blog {
  id: string;
  title: string;
  content: string;
}

let blogs: Blog[] = [];

// Create 10 sample blogs at start
for (let i = 1; i <= 10; i++) {
  blogs.push({
    id: uuidv4(),
    title: `Blog Post ${i}`,
    content: `This is the content for blog post ${i}.`
  });
}

export function getBlogs() {
  return blogs;
}

export function getBlogById(id: string) {
  return blogs.find((blog) => blog.id === id);
}

export function createBlog(title: string, content: string) {
  const newBlog = { id: uuidv4(), title, content };
  blogs.push(newBlog);
  return newBlog;
}

export function deleteBlog(id: string) {
  blogs = blogs.filter((blog) => blog.id !== id);
}

export function updateBlog(id: string, title: string, content: string) {
  const index = blogs.findIndex((blog) => blog.id === id);
  if (index !== -1) {
    blogs[index].title = title;
    blogs[index].content = content;
  }





  
}

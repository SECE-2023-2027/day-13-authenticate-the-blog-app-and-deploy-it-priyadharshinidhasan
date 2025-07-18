// import { getBlogById } from '../../../api/blogs';
import { getBlogById } from '../../../api/blogs';

export default function BlogDetails({ params }: { params: { id: string } }) {
  const blog = getBlogById(params.id);

  if (!blog) {
    return (
      <main>
        <h1>Blog Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </main>
  );
}

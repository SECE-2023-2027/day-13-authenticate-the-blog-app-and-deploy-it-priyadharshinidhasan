import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> |{' '}
      <Link href="/admin/login">Admin Login</Link> |{' '}
      <Link href="/user/listofblogs">Blogs</Link> |{' '}
      <Link href="/user/userLogin">User Login</Link>
    </nav>
  );
}

import Link from 'next/link';

export default function BlogItem({ id, title }: { id: string; title: string }) {
  return (
    <li>
      <Link href={`/user/${id}`}>{title}</Link>
    </li>
  );
}

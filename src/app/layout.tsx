import '../styles/global.css';
import Navbar from '../compoents/Navbar';
import Footer from '../compoents/Footer';

export const metadata = {
  title: 'My Blog App',
  description: 'A clean blog built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

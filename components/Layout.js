import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Hp by Next.js' }) {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen text-gray-200 text-sm font-mono'>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className='bg-gray-800 w-screen'>
          <div className='flex justify-center items-center leading-normal  pl-8 h-3'></div>
          <div className='flex space-x-4'>
            <Link href='/'>
              <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                Home
              </a>
            </Link>
            <Link href='/blog-page'>
              <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                Blog
              </a>
            </Link>
            <Link href='/contact-page'>
              <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                Contact
              </a>
            </Link>
          </div>
        </nav>
      </header>
      <main className='flex flex-1 justify-center items-center flex-col w-screen'>
        {children}
      </main>
    </div>
  );
}
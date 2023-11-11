import '@/styles/globals.css';
import Link from 'next/link';


export default function App({ Component, pageProps }) {
  // console.count('App Loaded')
  return(
    <>
    <nav className='navi'>
            <Link href='/' className='link' >Home</Link>
            {/* <a href="/" className='link'>Home</a> */}
            <Link href="/about" className='link'>About</Link>
            <Link href="/products" className='link'>Products</Link>
            <Link href="/contact" className='link'>Contact</Link>
        </nav>
        <Component {...pageProps} />
    </>

  )
  
  
  

}

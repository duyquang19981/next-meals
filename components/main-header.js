import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href='/' className={classes.logo}>
        {/* - use Image will add some new props to `img` 
        - handle lazy load the image 
        - optimize the quility of the image based on platforms (web, mobile, app...)
        - change to extended part (png -> webp) */}
        <Image src={logoImg} alt='A plate with food on it' priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

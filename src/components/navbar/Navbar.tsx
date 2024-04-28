import React from 'react';
import styles from './navbar.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Logo from '../../../public/assets/img/Marvel_logo.jpg';
import Link from 'next/link';
import NavLikes from '@/components/navLikes/NavLikes';

const Navbar = () => {
  return (
    <nav className={classNames(styles.nav)}>
      <Link href={'/'}>
        <Image src={Logo} alt="Home" priority />
      </Link>
      <NavLikes />
    </nav>
  );
};

export default Navbar;
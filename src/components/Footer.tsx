import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            alt='logo'
            className='object-contain'
            height={18}
            src='/logo.svg'
            width={118}
          />
          <p className='text-base text-gray-700'>
            Carhub {year} <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div className='footer__link' key={link.title}>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  className='text-gray-500'
                  href={item.url}
                  key={item.title}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@{year} CarHub. All Rights Reserved</p>

        <div className='footer__copyrights-link'>
          <Link className='text-gray-500' href='/'>
            Privacy Policy
          </Link>
          <Link className='text-gray-500' href='/'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

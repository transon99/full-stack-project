import Icons from '@/assets/Icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  const fakeData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <nav className="p-3 bg-">
      <ul className="container flex justify-between">
        {fakeData.map((item, index) => (
          <li>
            <Link href="/" className="flex items-center flex-col">
              <Image
                src={Icons.IconsDesktop}
                alt="icon"
                className="w-[26px] h-[26px]"
              />
              <p>Máy bộ</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

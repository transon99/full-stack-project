import React from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col container">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  );
}

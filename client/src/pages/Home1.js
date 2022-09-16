import React from 'react';

import { TopNav } from '../components/nav/TopNav';
import { RequestForm } from '../components/forms/RequestForm';
import { FooterNav } from '../components/nav/FooterNav';

export default function Home() {
  return (
    <>
      <TopNav />

      <RequestForm />

      <FooterNav />
    </>
  );
}

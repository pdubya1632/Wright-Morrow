import React from 'react';

import { TopNav } from '../components/layouts/TopNav';
import { RequestForm } from '../components/forms/RequestForm';
import { FooterNav } from '../components/layouts/FooterNav';

export default function Home() {
  return (
    <>
      <TopNav />

      <RequestForm />

      <FooterNav />
    </>
  );
}

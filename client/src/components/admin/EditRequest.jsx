import React from 'react';

import { TopNav } from '../components/nav/TopNav';
import { JobRequestForm } from '../components/forms/JobRequestForm';
import { FooterNav } from '../components/nav/FooterNav';

export default function Home() {
  return (
    <>
      <TopNav />
      
      <JobRequestForm />

      <FooterNav />
    </>
  );
}

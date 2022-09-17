import React from 'react';

import { TopNav } from '../components/nav/TopNav';
import AddJobForm from '../components/ui/forms/AddJobForm';
import { FooterNav } from '../components/nav/FooterNav';

export default function Home() {
  return (
    <>
      <TopNav />

      <AddJobForm />

      <FooterNav />
    </>
  );
}

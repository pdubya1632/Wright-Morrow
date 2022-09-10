import React from 'react';

import { TopNavLayout } from '../components/layouts/TopNavLayout';
import { RequestForm } from '../components/forms/RequestForm';
import { FooterLayout } from '../components/layouts/FooterLayout';

export default function Home() {
  return (
    <>
      <TopNavLayout />

      <RequestForm />

      <FooterLayout />
    </>
  );
}

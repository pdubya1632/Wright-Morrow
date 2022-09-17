import { TopNav } from '../components/nav/TopNav';
import { RequestForm } from '../components/ui/forms/RequestForm';
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

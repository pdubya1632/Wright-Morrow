import { ReactComponent as Logo } from '../../images/wm-logo.svg';

export function AuthFormHeader() {
  return (
    <header className="mt-20 mb-5 flex justify-center w-full">
        <Logo width={175} alt="Wright &amp; Morrow" className="" />
        <a href="/" className="text-2xl font-semibold hidden">Wright &amp; Morrow</a>
    </header>
  );
}

import { ReactComponent as Logo } from '../../images/wm-logo.svg';
import { Link } from 'react-router-dom';

export function AuthFormHeader() {
  return (
    <header className="mt-20 mb-5 flex justify-center w-full">
        <Link to="/"><Logo width={175} alt="Wright &amp; Morrow" className="" /></Link>
    </header>
  );
}

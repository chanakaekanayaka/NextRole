
import { Link } from 'react-router-dom';

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img src="/assets/svg/Logo.svg"  className="w-[50px] h-[50px] min-w-10 min-h-10 object-contain" />
    </Link>
  );
};



import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className="text-[#0c3429] py-4 font-bold">
        <Link to="/">Zero Waste Shop</Link>
      </h1>
    </header>
  );
};

export default Header;

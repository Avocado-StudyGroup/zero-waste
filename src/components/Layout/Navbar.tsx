import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="h-[70px] z-20 w-full bg-green-800 text-white">
      <ul className="flex gap-6">
        {NavList.map((item) => (
          <li key={item.title}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const NavList = [
  { title: 'shop', href: '/shop' },
  { title: 'board', href: '/board' },
  { title: 'map', href: '/map' },
];

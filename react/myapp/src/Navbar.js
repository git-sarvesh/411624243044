import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/add" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Add
      </NavLink>
      <NavLink to="/subtract" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Subtract
      </NavLink>
      <NavLink to="/multiply" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Multiply
      </NavLink>
      <NavLink to="/divide" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Divide
      </NavLink>
    </nav>
  );
}

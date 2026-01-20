import { NavLink } from 'react-router-dom';

function Navbar() {
  const base =
    'text-sm text-slate-700 hover:text-orange-600 transition';
  const active = 'text-orange-600 font-medium';

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 sticky top-0 z-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-orange-500" />
        <div className="flex flex-col leading-tight">
          <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
            DevCore
          </span>
          <span className="text-[11px] text-slate-400">
            Web Solutions
          </span>
        </div>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex items-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${base} ${isActive ? active : ''}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ''}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/forfaits"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ''}`
          }
        >
          Forfaits
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ''}`
          }
        >
          À propos
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ''}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `${base} ${isActive ? active : ''}`
          }
        >
          FAQ
        </NavLink>
      </nav>

      {/* Bouton Commencer */}
      <NavLink
        to="/contact"
        className="inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition"
      >
        Commencer →
      </NavLink>
    </header>
  );
}

export default Navbar;

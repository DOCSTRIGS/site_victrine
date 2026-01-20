import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkBase =
    'text-sm text-slate-600 hover:text-sky-600 transition';
  const linkActive = 'text-sky-700 font-semibold';

  return (
    <header className="mt-0 mb-4 w-full bg-white border-b border-slate-200">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        {/* Logo gauche */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-sky-500 rounded-full" />
          <span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-800">
            DEVCORE
          </span>
        </div>

        {/* Menu centre */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`
            }
          >
            À propos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`
            }
          >
            FAQ
          </NavLink>
        </nav>

        {/* Bouton droite (carré, couleur claire) */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-600 transition"
        >
          Discuter d&apos;un projet
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;

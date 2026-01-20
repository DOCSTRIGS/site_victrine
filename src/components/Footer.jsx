import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-950 to-slate-950 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              DevCore
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Agence web créative spécialisée dans la création de solutions numériques innovantes pour votre entreprise.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="group w-10 h-10 flex items-center justify-center transition-all duration-300 relative">
                <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 rounded-lg transition-all duration-300"></div>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover:text-violet-400 transition-colors" strokeWidth={1.5}>
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="group w-10 h-10 flex items-center justify-center transition-all duration-300 relative">
                <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 rounded-lg transition-all duration-300"></div>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover:text-violet-400 transition-colors" strokeWidth={1.5}>
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737-.915.403-1.946 1.25-1.986 2.757-.04 1.134.023 2.83.94 3.85-1.599.08-2.905-.182-4.042-1.226-1.02-1.25-2.01-2.5-3.708-2.7-1.217 0-2.14.394-2.86 1.195-.748.802-1.119 1.654-1.142 2.799-.02 1.429-.142 2.839.821 4.078 1.85 2.354 5.228 2.595 8.047 1.487.385-.184.629-.654.757-1.144.428-1.926.606-4.415.639-6.479.02-1.02.066-2.04.135-3.053a3.816 3.816 0 01.814-1.946c.131-.159.3-.315.309-.556a12.6 12.6 0 00-.028-.704.143.143 0 00-.146-.142h-.894a.145.145 0 00-.144.144c-.003.863-.027 1.724-.032 2.59-.03 2.17-.121 5.328-1.081 6.9-.616 1.02-1.77 1.234-2.876.482-.847-.547-1.477-1.529-1.82-2.471-.171-.532-.4-1.139-.603-1.703.627.463 1.278.842 2.022 1.01 1.671.374 3.6-.42 3.962-2.045.169-.783.066-2.039-.206-2.901.06-.165.087-.332.06-.501-.08-.926-.312-1.773-.782-2.433m7.968.704c-.275.133-.606.326-.763.577-.175.286-.153.717-.153 1.252 0 1.858-.228 4.382-.904 5.869-.337.784-.919 1.325-1.789 1.369-.99.051-1.719-.404-1.976-1.099-.44-1.167-.398-3.597-.289-5.43.032-.58.061-1.162.067-1.748a.29.29 0 00-.061-.165.145.145 0 00-.147-.037l-.302.032-.302-.032a.145.145 0 00-.147.037.29.29 0 00-.061.165c-.006.586-.035 1.168-.067 1.748-.109 1.833-.151 4.263.289 5.43.257.695.986 1.15 1.976 1.099.87-.044 1.452-.585 1.789-1.369.676-1.487.904-4.011.904-5.869 0-.535-.022-.966.153-1.252.157-.251.488-.444.763-.577.275-.133.606-.326.763-.577.175-.286.153-.717.153-1.252 0-1.858.228-4.382.904-5.869.337-.784.919-1.325 1.789-1.369.99-.051 1.719.404 1.976 1.099.44 1.167.398 3.597.289 5.43-.032.58-.061 1.162-.067 1.748a.29.29 0 00.061.165.145.145 0 00.147.037l.302-.032.302.032a.145.145 0 00.147-.037.29.29 0 00.061-.165c.006-.586.035-1.168.067-1.748.109-1.833.151-4.263-.289-5.43-.257-.695-.986-1.15-1.976-1.099-.87.044-1.452.585-1.789 1.369-.676 1.487-.904 4.011-.904 5.869 0 .535.022.966-.153 1.252-.157.251-.488.444-.763.577" />
                </svg>
              </a>
              <a href="#" className="group w-10 h-10 flex items-center justify-center transition-all duration-300 relative">
                <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 rounded-lg transition-all duration-300"></div>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-slate-400 group-hover:text-violet-400 transition-colors" strokeWidth={1.5}>
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-violet-300">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-slate-400 hover:text-violet-400 transition-colors">Sites Vitrines</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-violet-400 transition-colors">Applications Web</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-violet-400 transition-colors">Design UX/UI</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-violet-400 transition-colors">APIs & Intégrations</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-violet-400 transition-colors">Maintenance 24/7</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-violet-300">Entreprise</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-violet-400 transition-colors">À Propos</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-violet-400 transition-colors">Accueil</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-violet-400 transition-colors">FAQ</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">Conditions d'Utilisation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-violet-400 transition-colors">Politique de Confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-violet-300">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-violet-400 font-semibold min-w-max">Adresse:</span>
                <span>Lomé, Togo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 font-semibold min-w-max">Email:</span>
                <a href="mailto:contact@devcore.tg" className="hover:text-violet-400 transition-colors">contact@devcore.tg</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 font-semibold min-w-max">Tél:</span>
                <a href="tel:+22892000000" className="hover:text-violet-400 transition-colors">+228 92 00 00 00</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-violet-400 font-semibold min-w-max">Horaires:</span>
                <span>Lun-Ven: 9h-18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} <span className="text-violet-400 font-semibold">DevCore</span>. Tous droits réservés.</p>
          <p className="text-center">Créé avec <span className="text-violet-400"></span> à Lomé, Togo</p>
          <p>Made by <span className="text-violet-400 font-semibold">DevCore Agency</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

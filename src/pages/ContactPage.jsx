import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📍',
      label: 'Adresse',
      value: 'Lomé, Togo'
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'contact@devcore.tg',
      link: 'mailto:contact@devcore.tg'
    },
    {
      icon: '📱',
      label: 'Téléphone',
      value: '+228 90 00 00 00',
      link: 'tel:+22890000000'
    },
    {
      icon: '⏰',
      label: 'Disponibilité',
      value: 'Lun-Ven 8h-18h (GMT)'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-12 bg-gradient-to-br from-blue-950 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Parlons de votre projet. Nous vous répondrons dans les 24 heures
          </p>
        </div>
        
        <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-200/50 text-center hover:shadow-xl transition-all duration-300">
                <p className="text-5xl mb-4">{info.icon}</p>
                <p className="text-sm text-slate-600 mb-2">{info.label}</p>
                {info.link ? (
                  <a href={info.link} className="text-lg font-bold text-blue-950 hover:text-cyan-600 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-blue-950">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-8">Envoyez-nous un Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                  <p className="text-2xl font-bold text-green-600 mb-2">✓ Merci!</p>
                  <p className="text-slate-600">
                    Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="Votre entreprise"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-950 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Column - Info */}
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-8">Réponse Rapide Garantie</h2>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Réponse dans les 24h',
                    description: 'Nous prenons votre message au sérieux et répondons rapidement'
                  },
                  {
                    title: 'Consultation Gratuite',
                    description: 'Discutez librement de votre projet sans engagement'
                  },
                  {
                    title: 'Devis Détaillé',
                    description: 'Recevez une proposition complète et transparente'
                  },
                  {
                    title: 'Support Continu',
                    description: 'Nous continuons à supporter votre projet après le lancement'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-cyan-200/50">
                    <h3 className="text-lg font-bold text-blue-950 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* FAQ Quick Link */}
              <a href="/faq" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold">
                Voir la FAQ →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12">Notre Bureau</h2>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-cyan-200/50">
            <div className="grid md:grid-cols-2">
              {/* Map would go here */}
              <div className="h-80 md:h-96 bg-gradient-to-br from-blue-900 to-cyan-600 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-2xl font-bold mb-2">📍 Lomé, Togo</p>
                  <p className="text-cyan-100">Centre-Ville</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">DevCore Studio</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-slate-500 mb-2">ADRESSE</p>
                    <p className="text-lg text-blue-950">Lomé, Togo</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-2">TÉLÉPHONE</p>
                    <p className="text-lg text-blue-950">+228 90 00 00 00</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-2">EMAIL</p>
                    <p className="text-lg text-blue-950">contact@devcore.tg</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-2">HORAIRES</p>
                    <p className="text-lg text-blue-950">Lun-Ven: 8h-18h</p>
                    <p className="text-lg text-blue-950">Sam: 9h-13h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

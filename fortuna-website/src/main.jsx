import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Menu, X, Mail, Phone, MapPin, Clock, PaintRoller,
  House, Building2, Handshake, ShieldCheck, Star, Leaf, ChevronRight,
  Instagram, Facebook, Linkedin
} from 'lucide-react';
import './styles.css';

const images = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90',
  painter: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85',
  facade: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
  interior: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
  construction: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85',
  roller: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85',
  lake: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=85'
};

const copy = {
  de: {
    nav: ['Home', 'Über uns', 'Leistungen', 'Projekte', 'Kontakt'],
    contact: 'Kontakt aufnehmen',
    eyebrow: 'QUALITÄT. VERTRAUEN. WERTERHALT.',
    headline: <>Fortuna GmbH<br/>Malerai & Bau Management</>,
    subhead: 'Ihr zuverlässiger Partner für professionelle Malerarbeiten und ganzheitliches Bau-Management in der Schweiz.',
    cta: 'Jetzt Kontakt aufnehmen',
    services: 'Unsere Leistungen',
    serviceItems: [
      ['Malerarbeiten', 'Innen- und Aussenanstriche, Renovationen, Spachtelarbeiten, Fassadenschutz.'],
      ['Umbau & Renovation', 'Modernisierung, Sanierung und Ausbau – für mehr Wert und Wohlbefinden.'],
      ['Bau Management', 'Planung, Koordination und Überwachung – effizient, transparent, zuverlässig.'],
      ['Beratung & Service', 'Persönliche Beratung, individuelle Lösungen und langjährige Erfahrung.']
    ],
    aboutLabel: 'ÜBER UNS',
    aboutTitle: <>Tradition trifft auf<br/>moderne Lösungen</>,
    aboutText: 'Die Fortuna GmbH steht für Qualität, Zuverlässigkeit und professionelle Handwerkskunst. Mit Leidenschaft und Erfahrung realisieren wir Projekte im Bereich Malerarbeiten und Bau-Management – von der ersten Idee bis zur schlüsselfertigen Umsetzung.',
    more: 'Mehr über uns',
    values: [['Zuverlässig', 'Pünktlich, termingerecht, sauber.'], ['Erfahren', 'Jahre lange Erfahrung im Bau- und Malerbereich.'], ['Nachhaltig', 'Verantwortung für Mensch und Umwelt.']],
    projectLabel: 'UNSERE PROJEKTE',
    projectTitle: 'Eindrücke unserer Arbeit',
    allProjects: 'Alle Projekte ansehen',
    projects: [['Fassadenanstrich', 'Zürich, Schweiz'], ['Innenanstrich & Renovation', 'Biel/Bienne, Schweiz'], ['Bau Management', 'Solothurn, Schweiz'], ['Malerarbeiten', 'Bern, Schweiz']],
    contactLabel: 'KONTAKT',
    contactTitle: <>Lassen Sie uns<br/>Ihr Projekt besprechen</>,
    contactText: 'Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich und unverbindlich.',
    phone: 'Telefon', email: 'E-Mail', location: 'Standort', hours: 'Öffnungszeiten',
    address: 'Biel/Bienne, Schweiz', hoursValue: 'Mo – Fr 07:00 – 17:00 Uhr',
    footer: 'Alle Rechte vorbehalten.', imprint: 'Impressum', privacy: 'Datenschutzerklärung',
    formTitle: 'Schreiben Sie uns', name: 'Ihr Name', emailPlaceholder: 'Ihre E-Mail-Adresse',
    phonePlaceholder: 'Telefon (optional)', servicePlaceholder: 'Wählen Sie eine Leistung',
    messagePlaceholder: 'Wie können wir Ihnen helfen?', send: 'Anfrage senden',
    formServices: ['Malerarbeiten', 'Umbau & Renovation', 'Bau Management', 'Beratung & Service', 'Sonstiges'],
    required: 'Bitte füllen Sie die Pflichtfelder aus.', sending: 'Wird gesendet…',
    close: 'Schliessen', menu: 'Menü'
  },
  en: {
    nav: ['Home', 'About us', 'Services', 'Projects', 'Contact'],
    contact: 'Get in touch',
    eyebrow: 'QUALITY. TRUST. LASTING VALUE.',
    headline: <>Fortuna GmbH<br/>Painting & Construction Management</>,
    subhead: 'Your reliable partner for professional painting and comprehensive construction management in Switzerland.',
    cta: 'Get in touch today',
    services: 'Our services',
    serviceItems: [
      ['Painting', 'Interior and exterior painting, renovations, plastering and facade protection.'],
      ['Conversion & Renovation', 'Modernisation, refurbishment and fit-outs – for greater value and comfort.'],
      ['Construction Management', 'Planning, coordination and supervision – efficient, transparent and reliable.'],
      ['Consulting & Service', 'Personal advice, tailored solutions and years of experience.']
    ],
    aboutLabel: 'ABOUT US',
    aboutTitle: <>Tradition meets<br/>modern solutions</>,
    aboutText: 'Fortuna GmbH stands for quality, reliability and professional craftsmanship. With passion and experience, we deliver painting and construction management projects – from the first idea to the finished result.',
    more: 'More about us',
    values: [['Reliable', 'Punctual, on schedule and tidy.'], ['Experienced', 'Years of experience in construction and painting.'], ['Sustainable', 'Responsibility for people and the environment.']],
    projectLabel: 'OUR PROJECTS',
    projectTitle: 'A look at our work',
    allProjects: 'View all projects',
    projects: [['Facade painting', 'Zurich, Switzerland'], ['Interior painting & renovation', 'Biel/Bienne, Switzerland'], ['Construction management', 'Solothurn, Switzerland'], ['Painting work', 'Bern, Switzerland']],
    contactLabel: 'CONTACT',
    contactTitle: <>Let’s discuss<br/>your project</>,
    contactText: 'We look forward to hearing from you and will be happy to offer personal, no-obligation advice.',
    phone: 'Phone', email: 'Email', location: 'Location', hours: 'Opening hours',
    address: 'Biel/Bienne, Switzerland', hoursValue: 'Mon – Fri 07:00 – 17:00',
    footer: 'All rights reserved.', imprint: 'Legal notice', privacy: 'Privacy policy',
    formTitle: 'Send us a message', name: 'Your name', emailPlaceholder: 'Your email address',
    phonePlaceholder: 'Phone (optional)', servicePlaceholder: 'Choose a service',
    messagePlaceholder: 'How can we help you?', send: 'Send enquiry',
    formServices: ['Painting', 'Conversion & Renovation', 'Construction Management', 'Consulting & Service', 'Other'],
    required: 'Please complete the required fields.', sending: 'Sending…',
    close: 'Close', menu: 'Menu'
  }
  ,
  fr: {
    nav: ['Accueil', 'À propos', 'Prestations', 'Projets', 'Contact'],
    contact: 'Nous contacter',
    eyebrow: 'QUALITÉ. CONFIANCE. VALEUR DURABLE.',
    headline: <>Fortuna GmbH<br/>Peinture & gestion de construction</>,
    subhead: 'Votre partenaire de confiance pour des travaux de peinture professionnels et une gestion globale de projets de construction en Suisse.',
    cta: 'Contactez-nous',
    services: 'Nos prestations',
    serviceItems: [
      ['Travaux de peinture', 'Peinture intérieure et extérieure, rénovations, travaux d’enduit et protection des façades.'],
      ['Transformation & rénovation', 'Modernisation, remise en état et aménagement pour plus de valeur et de confort.'],
      ['Gestion de construction', 'Planification, coordination et supervision : efficacité, transparence et fiabilité.'],
      ['Conseil & service', 'Conseils personnalisés, solutions adaptées et longue expérience.']
    ],
    aboutLabel: 'À PROPOS',
    aboutTitle: <>La tradition rencontre<br/>les solutions modernes</>,
    aboutText: 'Fortuna GmbH est synonyme de qualité, de fiabilité et de savoir-faire professionnel. Avec passion et expérience, nous réalisons des projets de peinture et de gestion de construction, de la première idée jusqu’à la livraison finale.',
    more: 'En savoir plus',
    values: [['Fiabilité', 'Ponctualité, respect des délais et travail soigné.'], ['Expérience', 'De nombreuses années dans la construction et la peinture.'], ['Durabilité', 'Une responsabilité envers les personnes et l’environnement.']],
    projectLabel: 'NOS PROJETS',
    projectTitle: 'Découvrez notre travail',
    allProjects: 'Voir tous les projets',
    projects: [['Peinture de façade', 'Zurich, Suisse'], ['Peinture intérieure & rénovation', 'Bienne, Suisse'], ['Gestion de construction', 'Soleure, Suisse'], ['Travaux de peinture', 'Berne, Suisse']],
    contactLabel: 'CONTACT',
    contactTitle: <>Parlons<br/>de votre projet</>,
    contactText: 'Nous attendons votre demande avec plaisir et vous conseillons volontiers, sans engagement.',
    phone: 'Téléphone', email: 'E-mail', location: 'Adresse', hours: 'Horaires',
    address: 'Bienne, Suisse', hoursValue: 'Lun – Ven, 07 h 00 – 17 h 00',
    footer: 'Tous droits réservés.', imprint: 'Mentions légales', privacy: 'Politique de confidentialité',
    formTitle: 'Écrivez-nous', name: 'Votre nom', emailPlaceholder: 'Votre adresse e-mail',
    phonePlaceholder: 'Téléphone (facultatif)', servicePlaceholder: 'Choisissez une prestation',
    messagePlaceholder: 'Comment pouvons-nous vous aider ?', send: 'Envoyer la demande',
    formServices: ['Travaux de peinture', 'Transformation & rénovation', 'Gestion de construction', 'Conseil & service', 'Autre'],
    required: 'Veuillez remplir les champs obligatoires.', sending: 'Envoi en cours…',
    close: 'Fermer', menu: 'Menu'
  },
  it: {
    nav: ['Home', 'Chi siamo', 'Servizi', 'Progetti', 'Contatti'],
    contact: 'Contattaci',
    eyebrow: 'QUALITÀ. FIDUCIA. VALORE DURATURO.',
    headline: <>Fortuna GmbH<br/>Pittura & gestione edilizia</>,
    subhead: 'Il vostro partner affidabile per lavori di pittura professionali e una gestione completa dei progetti edilizi in Svizzera.',
    cta: 'Contattaci ora',
    services: 'I nostri servizi',
    serviceItems: [
      ['Lavori di pittura', 'Pitture interne ed esterne, ristrutturazioni, stuccatura e protezione delle facciate.'],
      ['Ristrutturazione & rinnovo', 'Modernizzazione, risanamento e rifiniture per più valore e comfort.'],
      ['Gestione edilizia', 'Pianificazione, coordinamento e supervisione: efficienti, trasparenti e affidabili.'],
      ['Consulenza & assistenza', 'Consulenza personale, soluzioni su misura e lunga esperienza.']
    ],
    aboutLabel: 'CHI SIAMO',
    aboutTitle: <>La tradizione incontra<br/>le soluzioni moderne</>,
    aboutText: 'Fortuna GmbH rappresenta qualità, affidabilità e professionalità artigianale. Con passione ed esperienza realizziamo progetti di pittura e gestione edilizia, dalla prima idea fino alla consegna finale.',
    more: 'Scopri di più',
    values: [['Affidabilità', 'Puntualità, rispetto delle scadenze e cura del lavoro.'], ['Esperienza', 'Anni di esperienza nell’edilizia e nei lavori di pittura.'], ['Sostenibilità', 'Responsabilità verso le persone e l’ambiente.']],
    projectLabel: 'I NOSTRI PROGETTI',
    projectTitle: 'Uno sguardo ai nostri lavori',
    allProjects: 'Vedi tutti i progetti',
    projects: [['Pittura della facciata', 'Zurigo, Svizzera'], ['Pittura interna & ristrutturazione', 'Bienne, Svizzera'], ['Gestione edilizia', 'Soletta, Svizzera'], ['Lavori di pittura', 'Berna, Svizzera']],
    contactLabel: 'CONTATTI',
    contactTitle: <>Parliamo<br/>del vostro progetto</>,
    contactText: 'Saremo lieti di ricevere la vostra richiesta e offrirvi una consulenza personale e senza impegno.',
    phone: 'Telefono', email: 'E-mail', location: 'Sede', hours: 'Orari di apertura',
    address: 'Bienne, Svizzera', hoursValue: 'Lun – Ven, 07:00 – 17:00',
    footer: 'Tutti i diritti riservati.', imprint: 'Note legali', privacy: 'Informativa sulla privacy',
    formTitle: 'Scriveteci', name: 'Il vostro nome', emailPlaceholder: 'Il vostro indirizzo e-mail',
    phonePlaceholder: 'Telefono (facoltativo)', servicePlaceholder: 'Selezionate un servizio',
    messagePlaceholder: 'Come possiamo aiutarvi?', send: 'Invia richiesta',
    formServices: ['Lavori di pittura', 'Ristrutturazione & rinnovo', 'Gestione edilizia', 'Consulenza & assistenza', 'Altro'],
    required: 'Compilate i campi obbligatori.', sending: 'Invio in corso…',
    close: 'Chiudi', menu: 'Menu'
  }

};

function Logo({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="FORTUNA GmbH home">
    <svg className="brand-mark" viewBox="0 0 54 48" role="img" aria-label="Fortuna logo">
      <path d="M5 25 L27 5 L49 25 L49 43 L34 43 L34 28 L27 22 L20 28 L20 43 L5 43 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter"/>
      <path d="M14 43 L14 29 L27 17 L40 29 L40 43" fill="none" stroke="#b99a5a" strokeWidth="4"/>
    </svg>
    <span className="brand-text"><strong>FORTUNA <small>GmbH</small></strong><em>MALERAI&nbsp; | &nbsp;BAU MANAGEMENT</em></span>
  </a>;
}

function App() {
  const [lang, setLang] = useState('de');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const t = copy[lang];

  const goContact = () => {
    setMenuOpen(false);
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  async function submitForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setBusy(true); setStatus('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
      });
      const result = await response.json();
      setStatus(result.message || (result.ok ? 'Vielen Dank!' : 'Bitte versuchen Sie es erneut.'));
      if (response.ok && result.ok) form.reset();
    } catch {
      setStatus(lang === 'de' ? 'Verbindung fehlgeschlagen. Bitte versuchen Sie es später erneut.' : 'Connection failed. Please try again later.');
    } finally { setBusy(false); }
  }

  const services = [
    { icon: PaintRoller, title: t.serviceItems[0][0], text: t.serviceItems[0][1] },
    { icon: House, title: t.serviceItems[1][0], text: t.serviceItems[1][1] },
    { icon: Building2, title: t.serviceItems[2][0], text: t.serviceItems[2][1] },
    { icon: Handshake, title: t.serviceItems[3][0], text: t.serviceItems[3][1] }
  ];
  const projects = [
    { image: images.facade, title: t.projects[0][0], place: t.projects[0][1] },
    { image: images.interior, title: t.projects[1][0], place: t.projects[1][1] },
    { image: images.construction, title: t.projects[2][0], place: t.projects[2][1] },
    { image: images.roller, title: t.projects[3][0], place: t.projects[3][1] }
  ];

  return <div className="site" id="home">
    <header className="header">
      <div className="header-inner">
        <Logo />
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {t.nav.map((item, i) => <a key={item} href={['#home','#ueber-uns','#leistungen','#projekte','#kontakt'][i]} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <button className="button button-gold header-cta" onClick={goContact}><Mail size={15}/>{t.contact}</button>
        <div className="language" aria-label="Sprache wählen">
          {['de', 'en', 'fr', 'it'].map(code => <button key={code} className={lang === code ? 'active' : ''} onClick={() => setLang(code)}>{code.toUpperCase()}</button>)}
          <span className="swiss-flag" title="Schweiz">✚</span>
        </div>
      </div>
    </header>

    <main>
      <section className="hero" style={{'--hero-image': `url("${images.hero}")`}}>
        <div className="hero-overlay"></div>
        <div className="hero-content wrap">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.headline}</h1>
          <p className="hero-sub">{t.subhead}</p>
          <button className="button button-gold" onClick={goContact}>{t.cta}<ArrowRight size={17}/></button>
        </div>
        <div className="hero-note">Ihre Vision.<br/>Unsere Umsetzung.</div>
      </section>

      <section className="services wrap" id="leistungen" aria-label={t.services}>
        {services.map(({icon: Icon, title, text}) => <article className="service" key={title}>
          <Icon className="service-icon" strokeWidth={1.65}/>
          <h3>{title}</h3><p>{text}</p>
        </article>)}
      </section>

      <section className="about wrap" id="ueber-uns">
        <div className="about-photo"><img src={images.painter} alt="Maler bei professionellen Malerarbeiten" loading="lazy"/></div>
        <div className="about-copy">
          <p className="eyebrow">{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
          <a className="text-link" href="#kontakt">{t.more}<ArrowRight size={15}/></a>
        </div>
        <div className="values">
          {[ShieldCheck, Star, Leaf].map((Icon, i) => <div className="value" key={t.values[i][0]}>
            <Icon/><div><h4>{t.values[i][0]}</h4><p>{t.values[i][1]}</p></div>
          </div>)}
        </div>
      </section>

      <section className="projects-section" id="projekte">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">{t.projectLabel}</p><h2>{t.projectTitle}</h2></div>
            <a className="text-link" href="#kontakt">{t.allProjects}<ArrowRight size={15}/></a>
          </div>
          <div className="project-grid">
            {projects.map(project => <article className="project" key={project.title}>
              <img src={project.image} alt={project.title} loading="lazy"/>
              <h3>{project.title}</h3><p>{project.place}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontakt" style={{'--contact-image': `url("${images.lake}")`}}>
        <div className="contact-shade"></div>
        <div className="wrap contact-inner">
          <div className="contact-intro">
            <p className="eyebrow">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <button className="button button-gold" onClick={() => setFormOpen(!formOpen)}><Mail size={15}/>{t.contact}<ArrowRight size={16}/></button>
          </div>
          <div className="contact-details">
            <div><Phone/><p><strong>{t.phone}</strong><a href="tel:+41761234567">+41 76 123 45 67</a></p></div>
            <div><Mail/><p><strong>{t.email}</strong><a href="mailto:info@fortuna-gmbh.ch">info@fortuna-gmbh.ch</a></p></div>
            <div><MapPin/><p><strong>{t.location}</strong><span>{t.address}</span></p></div>
            <div><Clock/><p><strong>{t.hours}</strong><span>{t.hoursValue}</span></p></div>
          </div>
        </div>
        {formOpen && <div className="form-wrap wrap">
          <form className="contact-form" onSubmit={submitForm}>
            <h3>{t.formTitle}</h3>
            <div className="form-grid">
              <label>{t.name} *<input name="name" required maxLength="120" autoComplete="name"/></label>
              <label>{t.emailPlaceholder} *<input name="email" type="email" required maxLength="200" autoComplete="email"/></label>
              <label>{t.phonePlaceholder}<input name="phone" type="tel" autoComplete="tel"/></label>
              <label>{t.servicePlaceholder}<select name="service"><option value="">{t.servicePlaceholder}</option>{t.formServices.map(s => <option key={s}>{s}</option>)}</select></label>
            </div>
            <label>{t.messagePlaceholder} *<textarea name="message" required rows="4" maxLength="5000"/></label>
            <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off"/></label>
            <button className="button button-gold" disabled={busy}>{busy ? t.sending : t.send}<ArrowRight size={16}/></button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
        </div>}
      </section>
    </main>

    <footer className="footer">
      <div className="footer-main wrap">
        <Logo light/>
        <nav>{t.nav.map((item, i) => <a key={item} href={['#home','#ueber-uns','#leistungen','#projekte','#kontakt'][i]}>{item}</a>)}</nav>
        <div className="socials"><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a></div>
        <span className="country"><span className="swiss-flag">✚</span> Schweiz</span>
      </div>
      <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Fortuna GmbH. {t.footer}</span><div><a href="#kontakt">{t.imprint}</a><a href="#kontakt">{t.privacy}</a></div></div>
    </footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);

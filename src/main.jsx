
  return <div className="site" id="home">
    <header className="header">
      <div className="header-inner">
        <Logo />
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {t.nav.map((item, i) => <a key={item} href={['#home','#ueber-uns','#leistungen','#projekte','#kontakt'][i]} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <button className="button button-gold header-cta" onClick={goContact}><Mail size={15}/>{t.contact}</button>
        <div className="language">
          <label className="language-label" htmlFor="language-select">Language</label>
          <select
            id="language-select"
            aria-label="Choose language"
            value={lang}
            onChange={(event) => setLang(event.target.value)}
          >
            <option value="de">🇩🇪 Deutsch</option>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="it">🇮🇹 Italiano</option>
          </select>
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
        <span className="country"><span className="swiss-flag">✚</span> Zürich, Schweiz</span>
      </div>
      <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Fortuna GmbH. {t.footer}</span><div><a href="#kontakt">{t.imprint}</a><a href="#kontakt">{t.privacy}</a></div></div>
    </footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);

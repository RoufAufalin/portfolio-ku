import { siteConfig } from "../siteConfig.js"
import { SocialIconLink } from "../components/SocialIconLink.jsx"
import { portfolioData } from "./portfolioData.js"
import "./styles.css"
import { Reveal } from "./components/Reveal.jsx"

export default function PortfolioApp() {
  const avatarUrl = `${import.meta.env.BASE_URL}${siteConfig.avatar}`
  const homeHref = import.meta.env.BASE_URL

  return (
    <div className="pPage">
      <div className="pShell">
        <div className="pTopbar">
          <a className="pBack" href={homeHref} aria-label="Kembali ke halaman link">
            ← Kembali ke Links
          </a>
          <span className="pTopLabel">Portfolio</span>
        </div>

        <header className="pHero" id="top">
          <div className="pAvatarWrap" aria-hidden="true">
            <img className="pAvatar" src={avatarUrl} alt="" />
          </div>
          <div>
            <h1 className="pName">{portfolioData.name}</h1>
            <p className="pRole">{portfolioData.role}</p>
            <div className="pMeta">
              <div>📍 {portfolioData.location}</div>
              <div>
                📧 <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              </div>
            </div>

            <div className="pSocialRow" aria-label="Social links">
              {siteConfig.socials.map((s) => (
                <SocialIconLink key={s.label} label={s.label} href={s.href} />
              ))}
            </div>
          </div>
        </header>

        <nav className="pNav" aria-label="Sections">
          <a className="pPill" href="#top">
            Top
          </a>
          <a className="pPill" href="#profile">
            Profile
          </a>
          <a className="pPill" href="#skills">
            Skills
          </a>
          <a className="pPill" href="#projects">
            Projects
          </a>
          <a className="pPill" href="#certifications">
            Certifications
          </a>
          <a className="pPill" href="#contact">
            Contact
          </a>
        </nav>

        <main className="pContent">
          <section id="profile">
            <Reveal>
              <div className="pCard">
                <h2 className="pCardTitle">Profile</h2>
                <p className="pText">{portfolioData.about}</p>
              </div>
            </Reveal>
          </section>

          <section id="skills">
            <Reveal>
              <div className="pCard">
                <h2 className="pCardTitle">Skills</h2>
                <div className="pSkills">
                  {portfolioData.skills.map((skill) => (
                    <span key={skill} className="pSkill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="projects">
            <Reveal>
              <div className="pCard">
                <h2 className="pCardTitle">Projects</h2>
                <div className="pProjects">
                  {portfolioData.projects.map((p) => (
                    <Reveal key={p.title} className="pRevealInner">
                      <article className="pProject">
                        <h3 className="pProjectTitle">{p.title}</h3>
                        <p className="pProjectDesc">{p.description}</p>
                        {p.bullets?.length ? (
                          <ul className="pBullets">
                            {p.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        ) : null}
                        <div className="pLinksRow">
                          {p.links.map((l) => (
                            <a
                              key={l.href}
                              className="pBtnLink"
                              href={l.href}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="certifications">
            <Reveal>
              <div className="pCard">
                <h2 className="pCardTitle">Certifications</h2>
                <div className="pProjects">
                  {portfolioData.certifications.map((c) => (
                    <Reveal key={c} className="pRevealInner">
                      <div className="pProject">
                        <div className="pText">{c}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="contact">
            <Reveal>
              <div className="pCard">
                <h2 className="pCardTitle">Contact</h2>
                <p className="pText pMuted">
                  Feel free to reach out for collaboration or opportunities:
                </p>
                <div className="pLinksRow">
                  {siteConfig.socials.map((s) => (
                    <a
                      key={s.label}
                      className="pBtnLink"
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="pFooter">
          <span>© {new Date().getFullYear()} {portfolioData.name}</span>
        </footer>
      </div>
    </div>
  )
}

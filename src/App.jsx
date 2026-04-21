import { siteConfig } from "./siteConfig.js"
import { LinkButton } from "./components/LinkButton.jsx"
import { SocialIconLink } from "./components/SocialIconLink.jsx"

export default function App() {
  const avatarUrl = `${import.meta.env.BASE_URL}${siteConfig.avatar}`

  return (
    <div className="page">
      <div className="shell">
        <header className="header">
          <div className="avatarWrap" aria-hidden="true">
            <img className="avatar" src={avatarUrl} alt="" />
          </div>
          <h1 className="name">{siteConfig.name}</h1>
          <p className="tagline">{siteConfig.tagline}</p>
        </header>

        <main className="main" aria-label="Links">
          <div className="links">
            {siteConfig.links.map((link) => (
              <LinkButton
                key={link.title}
                href={link.href}
                title={link.title}
                subtitle={link.subtitle}
              />
            ))}
          </div>

          <div className="socials" aria-label="Social links">
            {siteConfig.socials.map((s) => (
              <SocialIconLink key={s.label} label={s.label} href={s.href} />
            ))}
          </div>
        </main>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        </footer>
      </div>
    </div>
  )
}


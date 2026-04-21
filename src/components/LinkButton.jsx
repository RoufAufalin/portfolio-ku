function isExternal(href) {
  return /^https?:\/\//i.test(href) || /^mailto:/i.test(href)
}

export function LinkButton({ href, title, subtitle }) {
  const external = isExternal(href)
  const rel = external ? "noreferrer noopener" : undefined
  const target = external ? "_blank" : undefined

  return (
    <a className="linkBtn" href={href} rel={rel} target={target}>
      <div className="linkBtnText">
        <div className="linkBtnTitle">{title}</div>
        {subtitle ? <div className="linkBtnSubtitle">{subtitle}</div> : null}
      </div>
      <span className="linkBtnIcon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}


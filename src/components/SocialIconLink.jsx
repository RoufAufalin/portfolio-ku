const ICONS = {
  Email: (
    <path d="M4 6h16v12H4V6zm8 6l8-5H4l8 5z" />
  ),
  LinkedIn: (
    <>
      <path d="M6.5 9H4v11h2.5V9zM5.25 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      <path d="M20 20h-2.5v-5.5c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20H11.4V9H14v1.5c.3-.7 1.2-1.7 2.9-1.7 2.1 0 3.6 1.4 3.6 4.4V20z" />
    </>
  ),
  GitHub: (
    <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.35-1.18-3.35-1.18-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.53 2.33 1.09 2.9.83.09-.64.35-1.09.63-1.34-2.21-.25-4.54-1.11-4.54-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.93.68 1.87v2.77c0 .27.18.58.69.48A10 10 0 0012 2z" />
  ),
  Medium: (
    <path d="M4 7.2c0-.5.2-.9.6-1.2l1.4-1.1V4h-4v.9l1.2 1.5c.1.1.2.3.2.5v10.2c0 .2-.1.4-.2.5L0 19.2v.8h5.2v-.8l-1.2-1.5c-.1-.1-.2-.3-.2-.5V7.2zm6.1-3.2l-3.8 0v.9l1.3 1.6c.1.2.2.4.2.6v10.4c0 .3-.1.5-.3.6l-1.2 1.4v.8h6.8v-.8l-1.2-1.4c-.2-.2-.3-.4-.3-.6V7.4l4.1 12.6h.7l4.7-12.6v10.8c0 .3 0 .4-.2.6l-1.4 1.3v.8H24v-.8l-1.4-1.3c-.1-.1-.2-.3-.2-.6V6.1c0-.3.1-.5.2-.6L24 4.7V4h-6.6l-3.9 10.6L10.1 4z" />
  )
}

function isExternal(href) {
  return /^https?:\/\//i.test(href) || /^mailto:/i.test(href)
}

export function SocialIconLink({ label, href }) {
  const external = isExternal(href)
  const rel = external ? "noreferrer noopener" : undefined
  const target = external ? "_blank" : undefined

  const icon = ICONS[label] ?? (
    <path d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-12a2 2 0 100 4 2 2 0 000-4z" />
  )

  return (
    <a className="socialIcon" href={href} aria-label={label} rel={rel} target={target}>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {icon}
      </svg>
    </a>
  )
}

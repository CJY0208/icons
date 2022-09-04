import React from 'react'

export default function ColorPaletteSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M416 352c-12.6-.84-21-4-28-12c-14-16-14-36 5.49-52.48l32.82-29.14c50.27-44.41 50.27-117.21 0-161.63C389.26 64.14 339.54 48 287.86 48c-60.34 0-123.39 22-172 65.11c-90.46 80-90.46 210.92 0 290.87c45 39.76 105.63 59.59 165.64 60h1.84c60 0 119.07-19.5 161.2-56.77C464 390 464 385 444.62 355.56C440 348 431 353 416 352zM112 208a32 32 0 1 1 32 32a32 32 0 0 1-32-32zm40 135a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm40-199a32 32 0 1 1 32 32a32 32 0 0 1-32-32zm64 271a48 48 0 1 1 48-48a48 48 0 0 1-48 48zm72-239a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"/></svg>
  )
}
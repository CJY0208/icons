import React from 'react'

export default function LogoFirebase({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45zM432 400l-46.74-276.79a11 11 0 0 0-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0 0 31.91 0zM302.36 158.93l-36.54-69.54a10.86 10.86 0 0 0-19.36 0L85.83 375.74z" fill="currentColor"/></svg>
  )
}
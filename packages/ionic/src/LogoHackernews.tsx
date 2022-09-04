import React from 'react'

export default function LogoHackernews({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M32 32v448h448V32zm249.67 250.83v84H235v-84l-77-140h55l46.32 97.54l44.33-97.54h52.73z" fill="currentColor"/></svg>
  )
}
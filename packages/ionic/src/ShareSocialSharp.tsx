import React from 'react'

export default function ShareSocialSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M378 324a69.78 69.78 0 0 0-48.83 19.91L202 272.41a69.68 69.68 0 0 0 0-32.82l127.13-71.5A69.76 69.76 0 1 0 308.87 129l-130.13 73.2a70 70 0 1 0 0 107.56L308.87 383A70 70 0 1 0 378 324z" fill="currentColor"/></svg>
  )
}
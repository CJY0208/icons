import React from 'react'

export default function Storm({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M11 2a6 6 0 0 0-5.986 6.41a5 5 0 0 0 .737 9.432a1 1 0 1 0 .498-1.936a3.002 3.002 0 0 1 .09-5.833a1 1 0 0 0 .758-1.194A4 4 0 1 1 14.92 7.2a1 1 0 0 0 .999.8H16a4 4 0 0 1 1.6 7.668a1 1 0 1 0 .8 1.832a6.001 6.001 0 0 0-1.729-11.463A6.002 6.002 0 0 0 11 2zm1.894 11.447a1 1 0 1 0-1.788-.894l-2 4A1 1 0 0 0 10 18h2.382l-1.276 2.553a1 1 0 1 0 1.788.894l2-4A1 1 0 0 0 14 16h-2.382l1.276-2.553z" fill="currentColor"/></g></svg>
  )
}
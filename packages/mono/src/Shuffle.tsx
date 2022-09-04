import React from 'react'

export default function Shuffle({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M21.924 6.617a.997.997 0 0 0-.217-.324l-3-3a1 1 0 1 0-1.414 1.414L18.586 6h-3.321a5 5 0 0 0-4.288 2.428l-3.67 6.115A3 3 0 0 1 4.736 16H3a1 1 0 1 0 0 2h1.735a5 5 0 0 0 4.288-2.428l3.67-6.115A3 3 0 0 1 15.264 8h3.32l-1.292 1.293a1 1 0 0 0 1.414 1.414l3-3A.997.997 0 0 0 22 7m-.076-.383a.996.996 0 0 1 .076.38z" fill="currentColor"/><path d="M21.706 17.708l-2.999 3a1 1 0 0 1-1.414-1.415L18.586 18h-3.321a5 5 0 0 1-4.288-2.428l-3.67-6.115A3 3 0 0 0 4.736 8H3a1 1 0 0 1 0-2h1.735a5 5 0 0 1 4.288 2.428l3.67 6.115A3 3 0 0 0 15.264 16h3.32l-1.292-1.293a1 1 0 0 1 1.414-1.414l3 3c.195.194.292.45.293.704V17a.997.997 0 0 1-.294.708z" fill="currentColor"/></g></svg>
  )
}
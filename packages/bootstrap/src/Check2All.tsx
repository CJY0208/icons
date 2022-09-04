import React from 'react'

export default function Check2All({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293L1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7l-.896-.897l.707-.707l.543.543l6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/><path d="M5.354 7.146l.896.897l-.707.707l-.897-.896a.5.5 0 1 1 .708-.708z"/></g></svg>
  )
}
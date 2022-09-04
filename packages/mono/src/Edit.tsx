import React from 'react'

export default function Edit({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10l3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7L17 4.414L15.414 6L18 8.586z" fill="currentColor"/></g></svg>
  )
}
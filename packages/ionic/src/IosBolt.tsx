import React from 'react'

export default function IosBolt({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M302.7 64L143 288h95.8l-29.5 160L369 224h-95.8l29.5-160z" fill="currentColor"/></svg>
  )
}
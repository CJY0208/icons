import React from 'react'

export default function Funnel({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M296 464a23.88 23.88 0 0 1-7.55-1.23L208.3 436.1a23.92 23.92 0 0 1-16.3-22.78V294.11a.44.44 0 0 0-.09-.13L23.26 97.54A30 30 0 0 1 46.05 48H466a30 30 0 0 1 22.79 49.54L320.09 294a.77.77 0 0 0-.09.13V440a23.93 23.93 0 0 1-24 24z" fill="currentColor"/></svg>
  )
}
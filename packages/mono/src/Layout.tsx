import React from 'react'

export default function Layout({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3.987A2 2 0 0 1 2 19V5zm2 4h16V5H4v4zm4 2H4v8h4v-8zm2 8h10v-8H10v8z" fill="currentColor"/></g></svg>
  )
}
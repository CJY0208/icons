import React from 'react'

export default function Backspace({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M17.707 8.293a1 1 0 0 1 0 1.414L15.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L14 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293a1 1 0 1 1 1.414-1.414L14 10.586l2.293-2.293a1 1 0 0 1 1.414 0z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M22 5a1 1 0 0 0-1-1H9.46a2 2 0 0 0-1.519.698l-5.142 6a2 2 0 0 0 0 2.604l5.142 6A2 2 0 0 0 9.46 20H21a1 1 0 0 0 1-1V5zm-2 13H9.46l-5.143-6L9.46 6H20v12z" fill="currentColor"/></g></svg>
  )
}
import React from 'react'

export default function DocumentLockSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M276 192h146.31a2 2 0 0 0 1.42-3.41L275.41 40.27a2 2 0 0 0-3.41 1.42V188a4 4 0 0 0 4 4z" fill="currentColor"/><path d="M256 272c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z" fill="currentColor"/><path d="M248 224a8 8 0 0 1-8-8V32H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V224zm88 175.91A16.1 16.1 0 0 1 319.91 416H192.09A16.1 16.1 0 0 1 176 399.91V320c0-10 7-16 16-16h16v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18h16a15.8 15.8 0 0 1 16 16z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function TimerOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M112.91 128A191.85 191.85 0 0 0 64 254c-1.18 106.35 85.65 193.8 192 194c106.2.2 192-85.83 192-192c0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 0 0-4.5 4.37V152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M233.38 278.63l-79-113a8.13 8.13 0 0 1 11.32-11.32l113 79a32.5 32.5 0 0 1-37.25 53.26a33.21 33.21 0 0 1-8.07-7.94z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function SearchCircleOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M232 160a72 72 0 1 0 72 72a72 72 0 0 0-72-72z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M283.64 283.64L336 336"/></svg>
  )
}
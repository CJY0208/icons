import React from 'react'

export default function PhonePortrait({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M336 0H176a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h160a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64zm32 448a32 32 0 0 1-32 32H176a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h11.35a7.94 7.94 0 0 1 7.3 4.75A32 32 0 0 0 224 56h64a32 32 0 0 0 29.35-19.25a7.94 7.94 0 0 1 7.3-4.75H336a32 32 0 0 1 32 32z" fill="currentColor"/><path d="M336 48a11.88 11.88 0 0 0-9.53 4.69A48 48 0 0 1 288 72h-64a48 48 0 0 1-38.47-19.31A11.88 11.88 0 0 0 176 48a16 16 0 0 0-16 16v384a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16z" fill="currentColor"/><path d="M336 0H176a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h160a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64zm32 448a32 32 0 0 1-32 32H176a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h11.35a7.94 7.94 0 0 1 7.3 4.75A32 32 0 0 0 224 56h64a32 32 0 0 0 29.35-19.25a7.94 7.94 0 0 1 7.3-4.75H336a32 32 0 0 1 32 32z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function Subway({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M352 16H160a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h192a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64zM208 64h96a16 16 0 0 1 0 32h-96a16 16 0 0 1 0-32zm-32 288a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm160 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm48-160a16 16 0 0 1-16 16H144a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16z" fill="currentColor"/><path d="M347.31 420.69a16 16 0 0 0-22.62 22.62l4.68 4.69H182.63l4.68-4.69a16 16 0 0 0-22.62-22.62l-48 48a16 16 0 1 0 22.62 22.62L150.63 480h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62z" fill="currentColor"/></svg>
  )
}
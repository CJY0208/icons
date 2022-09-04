import React from 'react'

export default function Minecart({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M4 15a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z"/></g></svg>
  )
}
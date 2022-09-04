import React from 'react'

export default function PodiumSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M160 32h192v448H160z" fill="currentColor"/><path d="M384 192h112v288H384z" fill="currentColor"/><path d="M16 128h112v352H16z" fill="currentColor"/></svg>
  )
}
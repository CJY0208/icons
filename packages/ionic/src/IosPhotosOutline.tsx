import React from 'react'

export default function IosPhotosOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M96 128v320h384V128H96zm368 304H112V144h352v288z" fill="currentColor"/><path d="M32 64v320h48v-16H48V80h352v32h16V64z" fill="currentColor"/></svg>
  )
}
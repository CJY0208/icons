import React from 'react'

export default function Cash({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M448 400H64a16 16 0 0 1 0-32h384a16 16 0 0 1 0 32z" fill="currentColor"/><path d="M416 448H96a16 16 0 0 1 0-32h320a16 16 0 0 1 0 32z" fill="currentColor"/><path d="M32 272H16v48a32 32 0 0 0 32 32h48v-16a64.07 64.07 0 0 0-64-64z" fill="currentColor"/><path d="M480 240h16v-64h-16a96.11 96.11 0 0 1-96-96V64H128v16a96.11 96.11 0 0 1-96 96H16v64h16a96.11 96.11 0 0 1 96 96v16h256v-16a96.11 96.11 0 0 1 96-96zm-224 64a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96z" fill="currentColor"/><circle cx="256" cy="208" r="64" fill="currentColor"/><path d="M416 336v16h48a32 32 0 0 0 32-32v-48h-16a64.07 64.07 0 0 0-64 64z" fill="currentColor"/><path d="M480 144h16V96a32 32 0 0 0-32-32h-48v16a64.07 64.07 0 0 0 64 64z" fill="currentColor"/><path d="M96 80V64H48a32 32 0 0 0-32 32v48h16a64.07 64.07 0 0 0 64-64z" fill="currentColor"/></svg>
  )
}
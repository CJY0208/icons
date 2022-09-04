import React from 'react'

export default function CarSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M447.68 220.78a16.44 16.44 0 0 0-1-3.1l-48-112A16 16 0 0 0 384 96H128a16 16 0 0 0-14.71 9.7l-48 112a16.44 16.44 0 0 0-1 3.1A16.15 16.15 0 0 0 64 224v184a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-24h288v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V224a16.15 16.15 0 0 0-.32-3.22zM144 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm224 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32zM104.26 208l34.29-80h234.9l34.29 80z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function HeartDislikeSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M32 64.45l389.47 389.94l22.84-22.47L54.85 42L32 64.45z" fill="currentColor"/><path d="M62.67 192.91c-.56 55.63 19.77 106.94 62.16 156.88c40.25 47.42 94.56 79.67 137.47 108.21l9 6l9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.62 114.62 0 0 0-9.07 43.63z" fill="currentColor"/><path d="M417.83 349.79c42.39-49.94 62.72-101.25 62.16-156.88c-.63-62-50.61-112.54-111.43-112.54c-48.26 0-80.35 28-97.23 48.17c-16.88-20.2-49-48.17-97.23-48.17A108.24 108.24 0 0 0 142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69z" fill="currentColor"/></svg>
  )
}
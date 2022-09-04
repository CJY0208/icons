import React from 'react'

export default function VolumeLowSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M391.12 341.48l-28.6-14.36l7.18-14.3c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73L362.48 185L391 170.48l7.26 14.25C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18z" fill="currentColor"/><path d="M189.65 176.1H96v159.8h93.65L320 440V72L189.65 176.1z" fill="currentColor"/></svg>
  )
}
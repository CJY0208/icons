import React from 'react'

export default function VolumeHighSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M320 320c9.74-19.38 16-40.84 16-64c0-23.48-6-44.42-16-64" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32"/><path d="M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32"/><path d="M416 416c30-46 48-91.43 48-160s-18-113-48-160" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32"/><path d="M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z" fill="currentColor"/></svg>
  )
}
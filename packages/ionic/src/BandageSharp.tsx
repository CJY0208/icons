import React from 'react'

export default function BandageSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M27.71 337.1a40 40 0 0 0 0 56.54l90.65 90.65a40 40 0 0 0 56.54 0l75.1-75.1L102.81 262z" fill="currentColor"/><path d="M496 147.1a39.87 39.87 0 0 0-11.75-28.38l-91-91a40.14 40.14 0 0 0-56.75 0L264 100.28L411.72 248l72.53-72.53A39.85 39.85 0 0 0 496 147.1z" fill="currentColor"/><path d="M273.06 386.19l116-116L241.77 123l-116 116zm19.63-141.5a16 16 0 1 1 0 22.62a16 16 0 0 1 0-22.62zm-48-48a16 16 0 1 1 0 22.62a16 16 0 0 1 0-22.62zm0 96a16 16 0 1 1 0 22.62a16 16 0 0 1 0-22.62zm-25.38-48a16 16 0 1 1-22.62 0a16 16 0 0 1 22.62 0z" fill="currentColor"/></svg>
  )
}
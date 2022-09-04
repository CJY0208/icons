import React from 'react'

export default function VolumeMediumSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M157.65 176.1H64v159.8h93.65L288 440V72L157.65 176.1z" fill="currentColor"/><path d="M352 320c9.74-19.41 16-40.81 16-64c0-23.51-6-44.4-16-64" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32"/><path d="M400 368c19.48-34 32-64 32-112s-12-77.7-32-112" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}
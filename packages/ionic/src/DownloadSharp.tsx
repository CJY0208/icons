import React from 'react'

export default function DownloadSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M272 160v147.37l64-64L358.63 266L256 368.63L153.37 266L176 243.37l64 64V160H92a12 12 0 0 0-12 12v296a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V172a12 12 0 0 0-12-12z" fill="currentColor"/><path d="M240 32h32v128h-32z" fill="currentColor"/></svg>
  )
}
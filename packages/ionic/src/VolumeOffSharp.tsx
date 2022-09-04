import React from 'react'

export default function VolumeOffSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M237.65 176.1H144v159.8h93.65L368 440V72L237.65 176.1z" fill="currentColor"/></svg>
  )
}
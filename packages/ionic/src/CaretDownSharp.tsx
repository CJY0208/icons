import React from 'react'

export default function CaretDownSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 144l192 224l192-224H64z" fill="currentColor"/></svg>
  )
}
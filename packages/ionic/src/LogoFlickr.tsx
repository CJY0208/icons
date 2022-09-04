import React from 'react'

export default function LogoFlickr({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32zm-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312zm168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312z" fill="currentColor"/></svg>
  )
}
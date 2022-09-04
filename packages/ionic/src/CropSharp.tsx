import React from 'react'

export default function CropSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44H166z" fill="currentColor"/><path d="M346 320h44V122H192v44h154v154z" fill="currentColor"/></svg>
  )
}
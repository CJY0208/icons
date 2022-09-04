import React from 'react'

export default function IosBoxOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M287.8 240c8.8 0 16.1 7.2 16.1 16s-7 16-15.9 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h63m1-16h-64c-17.6 0-32 14.4-32 32s14.4 32 32 32h64c17.6 0 32-14.4 32-32s-14.4-32-32-32z" fill="currentColor"/><path d="M416 112H96v80h16v208h288V192h16v-80zm-32 272H128V192h256v192zm16-208H112v-48h288v48z" fill="currentColor"/></svg>
  )
}
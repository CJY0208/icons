import React from 'react'

export default function IosMinusEmpty({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M384 265H128v-17h256v17z" fill="currentColor"/></svg>
  )
}
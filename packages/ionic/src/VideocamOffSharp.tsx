import React from 'react'

export default function VideocamOffSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M57.376 79.998l22.627-22.627l358.63 358.63l-22.627 22.628z" fill="currentColor"/><path d="M32 112a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a15.89 15.89 0 0 0 9.34-3l-285-285z" fill="currentColor"/><path d="M336 208v-80a16 16 0 0 0-16-16H179.63l245.44 245.44L496 400V112z" fill="currentColor"/></svg>
  )
}
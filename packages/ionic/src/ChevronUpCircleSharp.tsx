import React from 'react'

export default function ChevronUpCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48zm96 270.63l-96-96l-96 96L137.37 296L256 177.37L374.63 296z" fill="currentColor"/></svg>
  )
}
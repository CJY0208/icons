import React from 'react'

export default function ChevronBackCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48zm62.63 304L296 374.63L177.37 256L296 137.37L318.63 160l-96 96z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function ChevronForwardCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48zm-40 326.63L193.37 352l96-96l-96-96L216 137.37L334.63 256z" fill="currentColor"/></svg>
  )
}
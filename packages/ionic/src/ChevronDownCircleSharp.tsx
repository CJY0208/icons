import React from 'react'

export default function ChevronDownCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48S48 141.13 48 256s93.13 208 208 208zm-96-270.63l96 96l96-96L374.63 216L256 334.63L137.37 216z" fill="currentColor"/></svg>
  )
}
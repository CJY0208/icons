import React from 'react'

export default function InvertModeOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" cx="256" cy="256" r="208"/><path d="M256 176v160a80 80 0 0 1 0-160z" fill="currentColor"/><path d="M256 48v128a80 80 0 0 1 0 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48z" fill="currentColor"/></svg>
  )
}
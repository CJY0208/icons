import React from 'react'

export default function PrintSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M400 96V56a8 8 0 0 0-8-8H120a8 8 0 0 0-8 8v40" fill="currentColor"/><rect x="152" y="264" width="208" height="160" rx="4" ry="4" fill="none"/><rect x="152" y="264" width="208" height="160" rx="4" ry="4" fill="none"/><path d="M408 112H104a56 56 0 0 0-56 56v208a8 8 0 0 0 8 8h56v72a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8v-72h56a8 8 0 0 0 8-8V168a56 56 0 0 0-56-56zm-48 308a4 4 0 0 1-4 4H156a4 4 0 0 1-4-4V268a4 4 0 0 1 4-4h200a4 4 0 0 1 4 4zm34-212.08a24 24 0 1 1 22-22a24 24 0 0 1-22 22z" fill="currentColor"/></svg>
  )
}
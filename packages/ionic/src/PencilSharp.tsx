import React from 'react'

export default function PencilSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M103 464H48v-55L358.14 98.09l55.77 55.78L103 464z" fill="currentColor"/><path d="M425.72 142L370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.91 25.91 0 0 1 18.42 7.62l17 17A25.87 25.87 0 0 1 464 91c0 7-2.71 14.45-7.62 19.36zm-7.52-70.83z" fill="currentColor"/></svg>
  )
}
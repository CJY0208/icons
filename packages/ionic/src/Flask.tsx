import React from 'react'

export default function Flask({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M452.32 365L327.4 167.12a48.07 48.07 0 0 1-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 64h16v77.48a47.92 47.92 0 0 1-7.41 25.63L59.68 365a74 74 0 0 0-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 0 0-2.5-75.79zM211.66 184.2A79.94 79.94 0 0 0 224 141.48V68a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v73.48a79.94 79.94 0 0 0 12.35 42.72l57.8 91.53a8 8 0 0 1-6.78 12.27H160.63a8 8 0 0 1-6.77-12.27z" fill="currentColor"/></svg>
  )
}
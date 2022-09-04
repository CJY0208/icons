import React from 'react'

export default function StarHalfSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4l-58.5 171.3L256 373.84L404.29 480l-58.61-171.3zM274.63 347.82L256 334.49v-200.1l26 78.91l7.24 22h105.39l-67.32 47.2l-19.69 13.81l7.78 22.75l26.26 76.75z" fill="currentColor"/></svg>
  )
}
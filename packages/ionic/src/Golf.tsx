import React from 'react'

export default function Golf({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M272 320.46V202.3l166.62-75.73a16 16 0 0 0 0-29.14l-176-80A16 16 0 0 0 240 32v288.46q8-.45 16-.46t16 .46z" fill="currentColor"/><path d="M463.33 457.5c-8.56-42.85-35.11-78.74-76.78-103.8c-32.5-19.55-72.67-31.3-114.55-33.7v79.75a16 16 0 1 1-32 0V320c-41.88 2.4-82.05 14.15-114.55 33.7c-41.67 25.06-68.22 60.95-76.78 103.8a32.49 32.49 0 0 0 6.44 27.08C61.13 492 70 496 80 496h352c10 0 18.88-4.05 24.9-11.42a32.49 32.49 0 0 0 6.43-27.08z" fill="currentColor"/></svg>
  )
}
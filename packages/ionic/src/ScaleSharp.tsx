import React from 'react'

export default function ScaleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M432 32H80a48.05 48.05 0 0 0-48 48v352a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V80a48.05 48.05 0 0 0-48-48zm-16.71 165l-52.46 61.73a27.83 27.83 0 0 1-37.65 4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18 15.6-69.18 24.89a27.84 27.84 0 0 1-37.65-4.62L96.71 197a32.12 32.12 0 0 1 .42-42c18.93-21.31 72.3-70.87 158.87-70.87S395.94 133.72 414.87 155a32.12 32.12 0 0 1 .42 42z" fill="currentColor"/></svg>
  )
}
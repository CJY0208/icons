import React from 'react'

export default function Brush({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M233.15 360.11a15.7 15.7 0 0 1-4.92-.77a16 16 0 0 1-10.92-13c-2.15-15-19.95-32.46-36.62-35.85a16 16 0 0 1-8.69-26.33l211.09-235.1c.19-.22.39-.43.59-.63a56.57 56.57 0 0 1 79.89 0a56.51 56.51 0 0 1 .11 79.78l-219 227a16 16 0 0 1-11.53 4.9z" fill="currentColor"/><path d="M119.89 480.11c-32.14 0-65.45-16.89-84.85-43a16 16 0 0 1 12.85-25.54c5.34 0 20-4.87 20-20.57c0-39.07 31.4-70.86 70-70.86s70 31.79 70 70.86c0 49.12-39.48 89.11-88 89.11z" fill="currentColor"/></svg>
  )
}
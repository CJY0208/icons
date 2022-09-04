import React from 'react'

export default function NutritionOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160c0 80 64 192 111.2 192s51.94-24 80.8-24s33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 0 1-9.1-8.73a97.6 97.6 0 0 1 28.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 0 1 8.67 8.92a98 98 0 0 1-28.08 58.2z" fill="currentColor"/><ellipse cx="216" cy="304" rx="24" ry="48" fill="currentColor"/><ellipse cx="296" cy="304" rx="24" ry="48" fill="currentColor"/></svg>
  )
}
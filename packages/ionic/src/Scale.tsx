import React from 'react'

export default function Scale({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M368 32H144A112.12 112.12 0 0 0 32 144v224a112.12 112.12 0 0 0 112 112h224a112.12 112.12 0 0 0 112-112V144A112.12 112.12 0 0 0 368 32zm36.21 178l-33.32 39.21A41.76 41.76 0 0 1 339 264.05a42.32 42.32 0 0 1-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47 10.47-60.69 19.25a41.86 41.86 0 0 1-54.2-8.46L107.79 210a50.48 50.48 0 0 1 4.49-70.27c27.84-25.35 75.37-55.57 143.72-55.57s115.88 30.22 143.72 55.57a50.48 50.48 0 0 1 4.49 70.27z" fill="currentColor"/></svg>
  )
}
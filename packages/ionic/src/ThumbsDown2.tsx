import React from 'react'

export default function ThumbsDown2({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M87.8 252.7C74 257.2 64 270.2 64 285.5c0 19 15.4 34.5 34.5 34.5h102.6c-2 25-10 53.6-1.1 87.3 7.5 28.4 39.4 49.7 52.4 36.8 5-4.9 3.5-15.2 3.5-33.8 0-42.8 17.8-86.1 39.8-108.7 9.4-9.7 25.2-13 40.2-13.6v16h112V64H336v32c-20.6.5-52.6-5.2-75.8-6.6-52-3.1-102 2.4-126.3 8.1-24.3 5.7-35 13-35 30.6 0 6.4 1.9 12.3 5.1 17.3-11.8 4.7-20.1 16.2-20.1 29.7 0 7.2 2.4 13.8 6.4 19.2-11.9 4.6-20.4 16.2-20.4 29.8.1 12.5 7.4 23.4 17.9 28.6zM400 96.3c8.8 0 16 7.1 16 16 0 8.8-7.2 16-16 16s-16-7.1-16-16c0-8.8 7.2-16 16-16z" fill="currentColor"/></svg>
  )
}
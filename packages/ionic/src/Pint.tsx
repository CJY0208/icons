import React from 'react'

export default function Pint({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M399 99.29c-.15-2.13-.3-4.35-.44-6.68L395.69 46a32 32 0 0 0-31.91-30H148.21a32 32 0 0 0-31.91 30l-2.91 46.63c-.14 2.31-.29 4.51-.43 6.62c-1.29 19.24-2.23 33.14 3.73 65.66c1.67 9.11 5.22 22.66 9.73 39.82c12.61 48 33.71 128.36 33.71 195.63V472a24 24 0 0 0 24 24h143.74a24 24 0 0 0 24-24v-71.62c0-77.09 21.31-153.29 34-198.81c4.38-15.63 7.83-28 9.41-36.62c5.99-32.51 5.05-46.42 3.72-65.66zm-35-47.54l1.5 24a4 4 0 0 1-4 4.25h-211a4 4 0 0 1-4-4.25l1.48-24A4 4 0 0 1 152 48h208a4 4 0 0 1 4 3.75z" fill="currentColor"/></svg>
  )
}
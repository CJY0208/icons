import React from 'react'

export default function IosArrowDropleft({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M301.3 147.6c-7.5-7.5-19.8-7.5-27.3 0l-95.4 95.7c-7.3 7.3-7.5 19.1-.6 26.6l94 94.3c3.8 3.8 8.7 5.7 13.7 5.7 4.9 0 9.9-1.9 13.6-5.6 7.5-7.5 7.6-19.7 0-27.3l-79.8-81 81.9-81.1c7.5-7.5 7.5-19.7-.1-27.3z" fill="currentColor"/><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm124.4 332.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4z" fill="currentColor"/></svg>
  )
}
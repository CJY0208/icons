import React from 'react'

export default function CheckmarkDoneCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm48.19 121.42l24.1 21.06l-73.61 84.1l-24.1-23.06zM191.93 342.63L121.37 272L144 249.37L214.57 320zm65 .79L185.55 272l22.64-22.62l47.16 47.21l111.13-127.17l24.1 21.06z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function PersonCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 1 1-72 72a72 72 0 0 1 72-72zm-2 288a175.55 175.55 0 0 1-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 0 1 256 432z" fill="currentColor"/></svg>
  )
}
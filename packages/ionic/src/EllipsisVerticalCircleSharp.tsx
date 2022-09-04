import React from 'react'

export default function EllipsisVerticalCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208zm-234-90a26 26 0 1 1 26 26a26 26 0 0 1-26-26zm0 90a26 26 0 1 1 26 26a26 26 0 0 1-26-26zm0 90a26 26 0 1 1 26 26a26 26 0 0 1-26-26z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function PinSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M339 99a83 83 0 1 0-102 80.8V464l19 32l19-32V179.8A83.28 83.28 0 0 0 339 99zm-59-6a21 21 0 1 1 21-21a21 21 0 0 1-21 21z" fill="currentColor"/></svg>
  )
}
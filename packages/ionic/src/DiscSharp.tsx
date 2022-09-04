import React from 'react'

export default function DiscSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><circle cx="256" cy="256" r="32" fill="currentColor"/><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM256 336a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function IosMore({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"/><path d="M102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"/><path d="M410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z" fill="currentColor"/></svg>
  )
}
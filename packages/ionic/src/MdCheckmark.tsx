import React from 'react'

export default function MdCheckmark({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" fill="currentColor"/></svg>
  )
}
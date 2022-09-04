import React from 'react'

export default function MdPlay({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M96 52v408l320-204L96 52z" fill="currentColor"/></svg>
  )
}
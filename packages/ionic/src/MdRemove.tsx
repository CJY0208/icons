import React from 'react'

export default function MdRemove({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M96 235h320v42H96z" fill="currentColor"/></svg>
  )
}
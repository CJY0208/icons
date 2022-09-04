import React from 'react'

export default function MdNavigate({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function ChatboxEllipses({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M408 48H104a72.08 72.08 0 0 0-72 72v192a72.08 72.08 0 0 0 72 72h24v64a16 16 0 0 0 26.25 12.29L245.74 384H408a72.08 72.08 0 0 0 72-72V120a72.08 72.08 0 0 0-72-72zM160 248a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"/></svg>
  )
}
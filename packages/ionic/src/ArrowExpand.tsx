import React from 'react'

export default function ArrowExpand({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M274 209.7l63.9-63.8L288 96h128v128l-49.9-49.9-63.8 63.9z" fill="currentColor"/><path d="M274 302.3l63.9 63.8L288 416h128V288l-49.9 49.9-63.8-63.9z" fill="currentColor"/><path d="M238 302.3l-63.9 63.8L224 416H96V288l49.9 49.9 63.8-63.9z" fill="currentColor"/><path d="M238 209.7l-63.9-63.8L224 96H96v128l49.9-49.9 63.8 63.9z" fill="currentColor"/></svg>
  )
}
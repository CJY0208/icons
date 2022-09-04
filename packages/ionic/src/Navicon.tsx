import React from 'react'

export default function Navicon({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M96 241h320v32H96z" fill="currentColor"/><path d="M96 145h320v32H96z" fill="currentColor"/><path d="M96 337h320v32H96z" fill="currentColor"/></svg>
  )
}
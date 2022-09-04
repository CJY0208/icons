import React from 'react'

export default function More({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M113.7 304C86.2 304 64 282.6 64 256c0-26.5 22.2-48 49.7-48 27.6 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z" fill="currentColor"/><path d="M256 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.3-48 49.8-48 27.5 0 49.7 21.5 49.7 48 0 26.6-22.2 48-49.7 48z" fill="currentColor"/><path d="M398.2 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.2-48 49.8-48 27.5 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z" fill="currentColor"/></svg>
  )
}
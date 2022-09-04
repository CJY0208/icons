import React from 'react'

export default function CardOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="60" d="M48 192h416"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="60" d="M128 300h48v20h-48z"/></svg>
  )
}
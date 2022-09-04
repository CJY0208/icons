import React from 'react'

export default function SearchCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64zm80 294.63l-54.15-54.15a88.08 88.08 0 1 1 22.63-22.63L358.63 336z" fill="currentColor"/><circle cx="232" cy="232" r="56" fill="currentColor"/></svg>
  )
}
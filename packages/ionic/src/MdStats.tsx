import React from 'react'

export default function MdStats({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M176 64h64v384h-64z" fill="currentColor"/><path d="M80 336h64v112H80z" fill="currentColor"/><path d="M272 272h64v176h-64z" fill="currentColor"/><path d="M368 176h64v272h-64z" fill="currentColor"/></svg>
  )
}
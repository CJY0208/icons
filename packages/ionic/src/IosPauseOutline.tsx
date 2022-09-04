import React from 'react'

export default function IosPauseOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M191 112v288h-47V112h47m16-16h-79v320h79V96z" fill="currentColor"/><path d="M368 112v288h-47V112h47m16-16h-79v320h79V96z" fill="currentColor"/></svg>
  )
}
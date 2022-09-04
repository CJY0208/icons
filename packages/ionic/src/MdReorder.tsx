import React from 'react'

export default function MdReorder({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M96 348h320v36H96z" fill="currentColor"/><path d="M96 128h320v36H96z" fill="currentColor"/><path d="M96 200.7h320v35.6H96z" fill="currentColor"/><path d="M96 275.8h320v35.6H96z" fill="currentColor"/></svg>
  )
}
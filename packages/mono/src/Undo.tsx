import React from 'react'

export default function Undo({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M12.207 2.293a1 1 0 0 1 0 1.414L10.914 5H12.5c4.652 0 8.5 3.848 8.5 8.5S17.152 22 12.5 22S4 18.152 4 13.5a1 1 0 1 1 2 0c0 3.548 2.952 6.5 6.5 6.5s6.5-2.952 6.5-6.5S16.048 7 12.5 7h-1.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0z" fill="currentColor"/></g></svg>
  )
}
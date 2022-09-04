import React from 'react'

export default function SkipForward({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M436.3 96h-8.1c-6.7 0-12.2 5-12.2 11.7v113.5L228.9 98.7c-2.5-1.7-5.1-2.3-8.1-2.3-8.3 0-15.4 7-15.4 17v63.1L86.9 98.3c-2.5-1.7-5.1-2.3-8.1-2.3-8.3 0-14.9 7.4-14.9 17.4v286c0 10 6.7 16.5 15 16.5 3.1 0 5.4-1.2 8.2-2.9l118.3-77.6v64c0 10 7.2 16.5 15.5 16.5 3.1 0 5.5-1.2 8.2-2.9L416 290.8v113c0 6.7 5.4 12.2 12.2 12.2h8.1c6.7 0 11.7-5.5 11.7-12.2V107.7c0-6.7-4.9-11.7-11.7-11.7z" fill="currentColor"/></svg>
  )
}
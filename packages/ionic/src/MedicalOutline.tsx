import React from 'react'

export default function MedicalOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M429.93 174.27l-16.47-28.59a15.49 15.49 0 0 0-21.15-5.7l-98.39 57a4 4 0 0 1-6-3.5L288 80a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16l.07 113.57a4 4 0 0 1-6 3.5l-98.39-57a15.49 15.49 0 0 0-21.15 5.7l-16.46 28.6a15.42 15.42 0 0 0 5.69 21.1l98.49 57.08a4 4 0 0 1 0 6.9l-98.49 57.08a15.54 15.54 0 0 0-5.69 21.1l16.47 28.59a15.49 15.49 0 0 0 21.15 5.7l98.39-57a4 4 0 0 1 6 3.5L224 432a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16l-.07-113.67a4 4 0 0 1 6-3.5l98.39 57a15.49 15.49 0 0 0 21.15-5.7l16.47-28.59a15.42 15.42 0 0 0-5.69-21.1l-98.49-57.08a4 4 0 0 1 0-6.9l98.49-57.08a15.51 15.51 0 0 0 5.68-21.11z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}
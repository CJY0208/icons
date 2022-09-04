import React from 'react'

export default function InfoLg({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704l1.323-6.208zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0z"/></g></svg>
  )
}
import React from 'react'

export default function Infinity({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M5.68 5.792L7.345 7.75L5.681 9.708a2.75 2.75 0 1 1 0-3.916zM8 6.978L6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865l.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978zm.656.772l1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75z"/></g></svg>
  )
}
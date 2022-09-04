import React from 'react'

export default function XDiamondFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339L8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954l2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954l2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8L3.339 4.046L.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/></g></svg>
  )
}
import React from 'react'

export default function Bluetooth({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path fillRule="evenodd" d="M8.543 3.948l1.316 1.316L8.543 6.58V3.948zm0 8.104l1.316-1.316L8.543 9.42v2.632zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745l-4.136 4.137V9.42l-2.294 2.274l-.827-.827L7.133 8.01zM7.903 16c3.498 0 5.904-1.655 5.904-8.01c0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01C2 14.344 4.407 16 7.904 16z"/></g></svg>
  )
}
import React from 'react'

export default function FolderSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M16 420a28 28 0 0 0 28 28h424a28 28 0 0 0 28-28V208H16z" fill="currentColor"/><path d="M496 124a28 28 0 0 0-28-28H212.84l-48-32H44a28 28 0 0 0-28 28v84h480z" fill="currentColor"/></svg>
  )
}
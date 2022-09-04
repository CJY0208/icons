import React from 'react'

export default function MdList({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M80 280h256v48H80z" fill="currentColor"/><path d="M80 184h320v48H80z" fill="currentColor"/><path d="M80 88h352v48H80z" fill="currentColor"/><g><path d="M80 376h288v48H80z" fill="currentColor"/></g></svg>
  )
}
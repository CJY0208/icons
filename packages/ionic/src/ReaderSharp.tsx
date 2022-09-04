import React from 'react'

export default function ReaderSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M80 44v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H92a12 12 0 0 0-12 12zm192 260H160v-32h112zm80-80H160v-32h192zm0-80H160v-32h192z" fill="currentColor"/></svg>
  )
}
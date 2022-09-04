import React from 'react'

export default function Award({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M9.669.864L8 0L6.331.864l-1.858.282l-.842 1.68l-1.337 1.32L2.6 6l-.306 1.854l1.337 1.32l.842 1.68l1.858.282L8 12l1.669-.864l1.858-.282l.842-1.68l1.337-1.32L13.4 6l.306-1.854l-1.337-1.32l-.842-1.68L9.669.864zm1.196 1.193l.684 1.365l1.086 1.072L12.387 6l.248 1.506l-1.086 1.072l-.684 1.365l-1.51.229L8 10.874l-1.355-.702l-1.51-.229l-.684-1.365l-1.086-1.072L3.614 6l-.25-1.506l1.087-1.072l.684-1.365l1.51-.229L8 1.126l1.356.702l1.509.229z"/><path d="M4 11.794V16l4-1l4 1v-4.206l-2.018.306L8 13.126L6.018 12.1L4 11.794z"/></g></svg>
  )
}
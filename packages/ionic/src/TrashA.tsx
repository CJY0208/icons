import React from 'react'

export default function TrashA({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M341 128V99c0-19.1-14.5-35-34.5-35H205.4C185.5 64 171 79.9 171 99v29H80v32h9.2s5.4.6 8.2 3.4c2.8 2.8 3.9 9 3.9 9l19 241.7c1.5 29.4 1.5 33.9 36 33.9h199.4c34.5 0 34.5-4.4 36-33.8l19-241.6s1.1-6.3 3.9-9.1 8.2-3.4 8.2-3.4h9.2v-32h-91v-.1zM192 99c0-9.6 7.8-15 17.7-15h91.7c9.9 0 18.6 5.5 18.6 15v29H192V99zm-8.5 285l-10.3-192h20.3L204 384h-20.5zm83.6 0h-22V192h22v192zm61.6 0h-20.4l10.5-192h20.3l-10.4 192z" fill="currentColor"/></svg>
  )
}
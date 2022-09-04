import React from 'react'

export default function DocumentsSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M307.94 248L216 154.52V242a6 6 0 0 0 6 6z" fill="currentColor"/><path d="M184 268V144H60a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h248a12 12 0 0 0 12-12V280H196a12 12 0 0 1-12-12z" fill="currentColor"/><path d="M366 120h85.94L360 26.52V114a6 6 0 0 0 6 6z" fill="currentColor"/><path d="M340 152a12 12 0 0 1-12-12V16H172a12 12 0 0 0-12 12v84h42.12A40.81 40.81 0 0 1 231 124.14l109.16 111a41.11 41.11 0 0 1 11.83 29V400H452a12 12 0 0 0 12-12V152z" fill="currentColor"/></svg>
  )
}
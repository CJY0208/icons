import React from 'react'

export default function RefreshCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208c114.69 0 208-93.31 208-208c0-114.87-93.13-208-208-208zm94 219a94 94 0 1 1-94-94h4.21l-24-24L256 129.2l59.8 59.8l-59.8 59.8l-19.8-19.8l27.92-27.92c-2.4-.08-5.12-.08-8.12-.08a66 66 0 1 0 66 66v-14h28z" fill="currentColor"/></svg>
  )
}
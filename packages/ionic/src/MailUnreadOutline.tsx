import React from 'react'

export default function MailUnreadOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M320 96H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h334.73a40 40 0 0 0 40-40V239" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112l87-65.67"/><circle cx="431.95" cy="128.05" r="47.95" fill="currentColor"/><path d="M432 192a63.95 63.95 0 1 1 63.95-63.95A64 64 0 0 1 432 192zm0-95.9a32 32 0 1 0 31.95 32a32 32 0 0 0-31.95-32z" fill="currentColor"/></svg>
  )
}
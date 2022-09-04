import React from 'react'

export default function Apps({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M104 160a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/><path d="M256 160a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/><path d="M408 160a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/><path d="M104 312a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/><path d="M256 312a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/><path d="M408 312a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/><path d="M104 464a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/><path d="M256 464a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/><path d="M408 464a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z" fill="currentColor"/></svg>
  )
}
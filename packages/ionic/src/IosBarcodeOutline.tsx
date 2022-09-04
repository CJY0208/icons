import React from 'react'

export default function IosBarcodeOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 384h80v-16H64V144h64v-16H48z" fill="currentColor"/><path d="M384 128v16h64v224h-64v16h80V128z" fill="currentColor"/><path d="M112 192h16v128h-16z" fill="currentColor"/><path d="M384 192h16v128h-16z" fill="currentColor"/><path d="M320 160h16v192h-16z" fill="currentColor"/><path d="M176 160h16v192h-16z" fill="currentColor"/><path d="M247 176h16v160h-16z" fill="currentColor"/></svg>
  )
}
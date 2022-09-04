import React from 'react'

export default function CashSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 368h416v32H48z" fill="currentColor"/><path d="M80 416h352v32H80z" fill="currentColor"/><path d="M480 176a96.11 96.11 0 0 1-96-96V64H128v16a96.11 96.11 0 0 1-96 96H16v64h16a96.11 96.11 0 0 1 96 96v16h256v-16a96.11 96.11 0 0 1 96-96h16v-64zM256 304a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96z" fill="currentColor"/><path d="M96 80V64H16v80h16a64.07 64.07 0 0 0 64-64z" fill="currentColor"/><path d="M32 272H16v80h80v-16a64.07 64.07 0 0 0-64-64z" fill="currentColor"/><path d="M480 144h16V64h-80v16a64.07 64.07 0 0 0 64 64z" fill="currentColor"/><path d="M416 336v16h80v-80h-16a64.07 64.07 0 0 0-64 64z" fill="currentColor"/><circle cx="256" cy="208" r="64" fill="currentColor"/></svg>
  )
}
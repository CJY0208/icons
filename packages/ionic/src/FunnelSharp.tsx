import React from 'react'

export default function FunnelSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M0 48l192 240v128l128 48V288L512 48H0z" fill="currentColor"/></svg>
  )
}
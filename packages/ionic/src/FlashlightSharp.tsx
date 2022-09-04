import React from 'react'

export default function FlashlightSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M330 16l-42.68 42.7L453.3 224.68L496 182L330 16z" fill="currentColor"/><ellipse cx="224.68" cy="287.3" rx="20.03" ry="19.96" fill="none"/><path d="M429.21 243.85L268 82.59L249.65 168L16 402l94 94l234.23-233.8zm-189 56.07a20 20 0 1 1 0-25.25a20 20 0 0 1-.02 25.25z" fill="currentColor"/></svg>
  )
}
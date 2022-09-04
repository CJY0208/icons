import React from 'react'

export default function AlbumsSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M128 64h256v32H128z" fill="currentColor"/><path d="M96 112h320v32H96z" fill="currentColor"/><path d="M464 448H48V160h416z" fill="currentColor"/></svg>
  )
}
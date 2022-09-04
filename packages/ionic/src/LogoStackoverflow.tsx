import React from 'react'

export default function LogoStackoverflow({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M392 440V320h40v160H64V320h40v120z" fill="currentColor"/><path d="M149.1 308.77l198.57 40.87l8.4-39.32l-198.57-40.87zm26.27-93.12L359.22 300L376 263.76l-183.82-84.84zm50.95-89l156 127.78l25.74-30.52l-156-127.78zM328 32l-33.39 23.8l120.82 160.37L448 192zM144 400h204v-40H144z" fill="currentColor"/></svg>
  )
}
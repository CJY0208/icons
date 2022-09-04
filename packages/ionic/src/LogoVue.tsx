import React from 'react'

export default function LogoVue({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 144.03l-55.49-96.11h-79.43L256 281.61L390.92 47.92h-79.43L256 144.03z" fill="currentColor"/><path d="M409.4 47.92L256 313.61L102.6 47.92H15.74L256 464.08L496.26 47.92H409.4z" fill="currentColor"/></svg>
  )
}
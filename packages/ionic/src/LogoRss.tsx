import React from 'react'

export default function LogoRss({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M108.56 342.78a60.34 60.34 0 1 0 60.56 60.44a60.63 60.63 0 0 0-60.56-60.44z" fill="currentColor"/><path d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33z" fill="currentColor"/><path d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function IosSunnyOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M247 96h18v56h-18z" fill="currentColor"/><path d="M247 356h18v60h-18z" fill="currentColor"/><path d="M360 247h56v18h-56z" fill="currentColor"/><path d="M96 247h60v18H96z" fill="currentColor"/><path transform="rotate(134.999 347.405 341.317)" d="M339 317.4h16.8v47.8H339z" fill="currentColor"/><path transform="rotate(134.999 170.67 164.582)" d="M162.2 140.7H179v47.9h-16.8z" fill="currentColor"/><path transform="rotate(45.001 347.406 164.562)" d="M339 140.7h16.8v47.8H339z" fill="currentColor"/><path transform="rotate(45.009 170.67 341.27)" d="M162.2 317.4H179v47.9h-16.8z" fill="currentColor"/><path d="M256 331.8c-41.8 0-75.8-34-75.8-75.8s34-75.8 75.8-75.8 75.8 34 75.8 75.8-34 75.8-75.8 75.8zm0-134.7c-32.5 0-58.9 26.4-58.9 58.9s26.4 58.9 58.9 58.9 58.9-26.4 58.9-58.9-26.4-58.9-58.9-58.9z" fill="currentColor"/></svg>
  )
}
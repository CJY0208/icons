import React from 'react'

export default function ListCircle({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm-88 302a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm0-71a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm0-73a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm184 135H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32zm0-71H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32zm0-72H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32z" fill="currentColor"/></svg>
  )
}
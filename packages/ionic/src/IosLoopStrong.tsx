import React from 'react'

export default function IosLoopStrong({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48c-75.033 0-144.531 40.658-181.373 106.107l-1.963 3.485 20.915 11.771 1.962-3.485C128.138 107.973 189.621 72 256 72c101.458 0 184 82.542 184 184a185.48 185.48 0 0 1-3.749 37.147l-.803 3.918 23.511 4.819.804-3.919A209.53 209.53 0 0 0 464 256c0-114.691-93.309-208-208-208z" fill="currentColor"/><path d="M416.459 346.119C383.862 404.027 322.379 440 256 440c-101.458 0-184-82.542-184-184 0-12.512 1.262-25.011 3.75-37.15l.803-3.918-23.511-4.819-.804 3.918A209.445 209.445 0 0 0 48 256c0 114.691 93.309 208 208 208 75.033 0 144.531-40.658 181.373-106.109l1.963-3.485-20.915-11.771-1.962 3.484z" fill="currentColor"/><path d="M384 256l64 64 64-64z" fill="currentColor"/><path d="M0 256l64-64 64 64z" fill="currentColor"/></svg>
  )
}
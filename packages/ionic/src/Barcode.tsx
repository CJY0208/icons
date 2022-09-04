import React from 'react'

export default function Barcode({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M419.13 96H419l-35.05.33L128 96h-.16l-36.74.33C66.93 96.38 48 116.07 48 141.2v230.27c0 25.15 19 44.86 43.2 44.86h.15l36.71-.33l255.92.33h.17l35.07-.33A44.91 44.91 0 0 0 464 371.13V140.87A44.92 44.92 0 0 0 419.13 96zM144 320a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0zm64 32a16 16 0 0 1-32 0V160a16 16 0 0 1 32 0zm64-16a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0zm64 16a16 16 0 0 1-32 0V160a16 16 0 0 1 32 0zm64-32a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0z" fill="currentColor"/></svg>
  )
}
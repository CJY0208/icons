import React from 'react'

export default function ArrowForwardCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208zm-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256L262.7 358.63z" fill="currentColor"/></svg>
  )
}
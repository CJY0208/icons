import React from 'react'

export default function SkullSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208zm-88 320a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56zm51.51 64L244 320h24l24.49 80zM344 336a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56zm104 32z" fill="currentColor"/></svg>
  )
}
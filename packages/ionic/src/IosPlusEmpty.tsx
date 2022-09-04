import React from 'react'

export default function IosPlusEmpty({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function IosPlus({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm128 217H264v119h-17V265H128v-17h119V128h17v120h120v17z" fill="currentColor"/></svg>
  )
}
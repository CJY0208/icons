import React from 'react'

export default function PlaySkipBackCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256zm128-80h32v69l128-77.53v176.9L208 267v69h-32z" fill="currentColor"/></svg>
  )
}
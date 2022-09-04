import React from 'react'

export default function BrightnessLow({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707a.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707a.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707a.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707a.5.5 0 0 1-.707.707z"/></g></svg>
  )
}
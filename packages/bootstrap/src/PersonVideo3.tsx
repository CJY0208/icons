import React from 'react'

export default function PersonVideo3({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M14 9.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8s-.8-3.2-4-3.2s-4 2.4-4 3.2z"/><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783c.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2z"/></g></svg>
  )
}
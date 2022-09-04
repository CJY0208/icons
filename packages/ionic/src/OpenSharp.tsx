import React from 'react'

export default function OpenSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M201.37 288l176-176H48v352h352V134.63l-176 176L201.37 288z" fill="currentColor"/><path d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48H320z" fill="currentColor"/></svg>
  )
}
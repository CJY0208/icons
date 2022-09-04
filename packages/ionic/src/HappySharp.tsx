import React from 'react'

export default function HappySharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM328 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24zm-144 0a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24zm72.05 176c-45.42 0-83.75-29.49-95.72-69.83C159.29 310.65 158 304 158 304h196s-1.31 6.69-2.33 10.17c-11.78 40.36-50.2 69.83-95.62 69.83z" fill="currentColor"/></svg>
  )
}
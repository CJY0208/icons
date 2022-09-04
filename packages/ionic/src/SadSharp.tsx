import React from 'react'

export default function SadSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM328 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24zm-144 0a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24zm72 80c45.42 0 83.75 29.49 95.72 69.83c1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288z" fill="currentColor"/></svg>
  )
}
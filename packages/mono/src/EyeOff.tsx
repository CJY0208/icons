import React from 'react'

export default function EyeOff({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M4.707 3.293a1 1 0 0 0-1.414 1.414l2.424 2.424c-1.43 1.076-2.678 2.554-3.611 4.422a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c1.555 0 3.1-.355 4.53-1.055l2.763 2.762a1 1 0 0 0 1.414-1.414l-16-16zm10.307 13.135c-.98.383-2 .572-3.014.572c-2.969 0-6.002-1.62-7.87-5c.817-1.479 1.858-2.62 3.018-3.437l2.144 2.144a3 3 0 0 0 4.001 4.001l1.72 1.72zm3.538-2.532c.483-.556.926-1.187 1.318-1.896c-1.868-3.38-4.9-5-7.87-5c-.112 0-.224.002-.336.007L9.879 5.223A10.215 10.215 0 0 1 12 5c3.903 0 7.736 2.236 9.894 6.553a1 1 0 0 1 0 .894a13.106 13.106 0 0 1-1.925 2.865l-1.417-1.416z" fill="currentColor"/></g></svg>
  )
}
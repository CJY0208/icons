import React from 'react'

export default function Paintbrush({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M149.515 283.349c-51.921 0-83.939 45.661-83.939 95.085 0 22.691-10.071 39.153-33.575 48.104 17.907 34.678 87.777 41.157 117.515 35.797 35.642-6.426 80.077-24.873 90.654-76.969 12.31-60.627-38.736-102.017-90.655-102.017z" fill="currentColor"/><path d="M467.638 60.356c-12.955-12.948-29.964-17.292-44.92-5.35L247.598 209.1c-8.648-2.371-16.525-1.869-22.909 2.346L165.896 260.4c-1.611 1.611-1.545 4.304.066 5.914.499.501 1.064.79 1.697.98.642.034 1.264.059 1.899.103.019-.002.036-.01.054-.014 47.938 3.432 91.034 36.754 89.3 89.506-.016.505-.029 1.007-.054 1.516.123.848.5 1.664 1.149 2.315a4.124 4.124 0 0 0 5.781.044c.018-.018.037-.027.055-.044.063-.063.106-.137.164-.2l50.457-57.342c4.216-6.374 4.72-14.24 2.355-22.875l154.169-175.047c11.951-14.948 7.604-31.948-5.35-44.9z" fill="currentColor"/><path d="M165.887 260.409l.009-.009-.008.007z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function Html5Outlined({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6l-245.2-69.6l-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3l22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7l-6.5-73.2h-91l11.3 144.7l188.6 52h1.7v-.4l187.7-51.7l1.7-16.3l21.2-242.2l3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5l4.8-47.2L742 249H511z" fill="currentColor"/></svg>
  )
}
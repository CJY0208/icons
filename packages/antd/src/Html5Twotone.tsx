import React from 'react'

export default function Html5Twotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6l-245.2-69.6l-56.7-641.2h603.8l-57.8 641.2z" fillOpacity=".8" fill="currentColor"/><path d="M209.9 155.4l56.7 641.2l245.2 69.6l244.1-69.6l57.8-641.2H209.9zm530.4 117.9l-4.8 47.2l-1.7 19.5H381.7l8.2 94.2H511v-.2h214.7l-3.2 24.3l-21.2 242.2l-1.7 16.3l-187.7 51.7v.4h-1.7l-188.6-52l-11.3-144.7h91l6.5 73.2l102.4 27.7h.8v-.2l102.4-27.7l11.4-118.5H511.9v.1H305.4l-22.7-253.5L281 249h461l-1.7 24.3z" fillOpacity=".1" fill="currentColor"/><path d="M281 249l1.7 24.3l22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7l-6.5-73.2h-91l11.3 144.7l188.6 52h1.7v-.4l187.7-51.7l1.7-16.3l21.2-242.2l3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5l4.8-47.2L742 249H511z" fillOpacity=".8" fill="currentColor"/></svg>
  )
}
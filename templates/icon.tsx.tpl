import React from 'react'

export default function {{ name }}({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 {{ width }} {{ height }}" {...props} className={`kl-icon ${className}`}>{{{ body }}}</svg>
  )
}
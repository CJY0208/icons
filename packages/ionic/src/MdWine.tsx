import React from 'react'

export default function MdWine({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M234.667 277.333V408H128v40h256v-40H277.333V277.333L448 106.667V64H64v42.667l170.667 170.666zm-74.667-128l-42.667-42.666h277.334L352 149.333H160z" fill="currentColor"/></svg>
  )
}
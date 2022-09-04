import React from 'react'

export default function WineSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288zm-336.65-3.67h281l-37.81 38H154.16z" fill="currentColor"/></svg>
  )
}
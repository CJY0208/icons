import React from 'react'

export default function PictureTwotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3l150.1 178L658.1 489L888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z" fillOpacity=".8" fill="currentColor"/><path d="M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z" fillOpacity=".1" fill="currentColor"/><path d="M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 1 1 0 176a88 88 0 0 1 0-176z" fillOpacity=".1" fill="currentColor"/><path d="M276 368a28 28 0 1 0 56 0a28 28 0 1 0-56 0z" fillOpacity=".1" fill="currentColor"/><path d="M304 456a88 88 0 1 0 0-176a88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28s-28-12.5-28-28s12.5-28 28-28z" fillOpacity=".8" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function FundTwotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560z" fillOpacity=".8" fill="currentColor"/><path d="M136 792h752V232H136v560zm56.4-130.5l214.9-215c3.1-3.1 8.2-3.1 11.3 0L533 561l254.5-254.6c3.1-3.1 8.2-3.1 11.3 0l36.8 36.8c3.1 3.1 3.1 8.2 0 11.3l-297 297.2a8.03 8.03 0 0 1-11.3 0L412.9 537.2L240.4 709.7a8.03 8.03 0 0 1-11.3 0l-36.7-36.9a8.03 8.03 0 0 1 0-11.3z" fillOpacity=".1" fill="currentColor"/><path d="M229.1 709.7c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5l114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 0 0-11.3 0L533 561L418.6 446.5a8.03 8.03 0 0 0-11.3 0l-214.9 215a8.03 8.03 0 0 0 0 11.3l36.7 36.9z" fillOpacity=".8" fill="currentColor"/></svg>
  )
}
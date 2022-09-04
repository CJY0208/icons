import React from 'react'

export default function AndroidContact({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M331.08 338.205c-22.156 12.594-47.777 19.783-75.084 19.783-27.302 0-52.919-7.182-75.073-19.771C122.153 356.152 77.262 396 64 448h384c-13.255-52-58.146-91.869-116.92-109.795z" fill="currentColor"/><path d="M255.996 64c-72.871 0-131.945 59.127-131.945 132.013 0 72.887 59.074 131.972 131.945 131.972S387.941 268.9 387.941 196.013C387.941 123.127 328.867 64 255.996 64zm0 230.986c-41.958 0-77.813-25.986-92.209-62.986h184.418c-14.396 37-50.252 62.986-92.209 62.986z" fill="currentColor"/></svg>
  )
}
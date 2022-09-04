import React from 'react'

export default function FileExcelFilled({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM575.34 477.84l-61.22 102.3L452.3 477.8a12 12 0 0 0-10.27-5.79h-38.44a12 12 0 0 0-6.4 1.85a12 12 0 0 0-3.75 16.56l82.34 130.42l-83.45 132.78a12 12 0 0 0-1.84 6.39a12 12 0 0 0 12 12h34.46a12 12 0 0 0 10.21-5.7l62.7-101.47l62.3 101.45a12 12 0 0 0 10.23 5.72h37.48a12 12 0 0 0 6.48-1.9a12 12 0 0 0 3.62-16.58l-83.83-130.55l85.3-132.47a12 12 0 0 0 1.9-6.5a12 12 0 0 0-12-12h-35.7a12 12 0 0 0-10.29 5.84z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function FunctionOutlined({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><defs/><path d="M841 370c3-3.3 2.7-8.3-.6-11.3c-1.5-1.3-3.4-2.1-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6c-2.9 3.4-7.9 3.8-11.3.9c-.9-.8-1.6-1.7-2.1-2.8l-63.5-141.3c-1.3-2.9-4.1-4.7-7.3-4.7H380.7l.9-4.7l8-42.3c10.5-55.4 38-81.4 85.8-81.4c18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1c-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415c-.9 4.3 1.9 8.6 6.2 9.5c.5.1 1.1.2 1.6.2H284l-89 429.9c-.9 4.3 1.9 8.6 6.2 9.5c.5.1 1.1.2 1.6.2H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4.7 11.3c1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1c.9.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6c4.4 0 8-3.6 8-8c0-1.2-.3-2.4-.8-3.5l-95.2-198.9c-1.4-2.9-.9-6.4 1.3-8.8L841 370z" fill="currentColor"/></svg>
  )
}
import React from 'react'

export default function ShieldSlash({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path fillRule="evenodd" d="M1.093 3.093c-.465 4.275.885 7.46 2.513 9.589a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625c.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625a11.32 11.32 0 0 0 1.733-1.525l-.745-.745a10.27 10.27 0 0 1-1.578 1.392c-.346.244-.652.42-.893.533c-.12.057-.218.095-.293.118a.55.55 0 0 1-.101.025a.615.615 0 0 1-.1-.025a2.348 2.348 0 0 1-.294-.118a6.141 6.141 0 0 1-.893-.533a10.725 10.725 0 0 1-2.287-2.233C3.053 10.228 1.879 7.594 2.06 4.06l-.967-.967zM3.98 1.98l-.852-.852A58.935 58.935 0 0 1 5.072.559C6.157.266 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.483 3.626-.332 6.491-1.551 8.616l-.77-.77c1.042-1.915 1.72-4.469 1.29-7.702a.48.48 0 0 0-.33-.39c-.65-.213-1.75-.56-2.836-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524a49.7 49.7 0 0 0-1.357.39zm9.666 12.374l-13-13l.708-.708l13 13l-.707.707z"/></g></svg>
  )
}
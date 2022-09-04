import React from 'react'

export default function Flower2({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M8 16a4 4 0 0 0 4-4a4 4 0 0 0 0-8a4 4 0 0 0-8 0a4 4 0 1 0 0 8a4 4 0 0 0 4 4zm3-12c0 .073-.01.155-.03.247c-.544.241-1.091.638-1.598 1.084A2.987 2.987 0 0 0 8 5c-.494 0-.96.12-1.372.331c-.507-.446-1.054-.843-1.597-1.084A1.117 1.117 0 0 1 5 4a3 3 0 0 1 6 0zm-.812 6.052A2.99 2.99 0 0 0 11 8a2.99 2.99 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 0 1-.647-.487zm-3.56.617a3.001 3.001 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084c.02.091.03.174.03.247a3 3 0 1 1-6 0c0-.073.01-.155.03-.247c.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 0 0 5 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461c.215.141.432.306.647.487zM8 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2z"/></g></svg>
  )
}
import React from 'react'

export default function IosFolderOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M457 96H215c-2.791 0-4.271-.585-6.094-2.408l-22.501-22.501-.168-.162C181.365 66.333 177.361 64 169 64H57c-13.785 0-25 10.317-25 23v336c0 13.317 11.683 25 25 25h400c12.683 0 23-11.215 23-25V119c0-13.327-9.673-23-23-23zM57 80h112c3.497 0 3.737.189 6.175 2.488l22.417 22.418c4.84 4.84 10.372 7.094 17.408 7.094h242c4.448 0 7 2.552 7 7v42.376a23.885 23.885 0 0 0-8-1.376H56c-2.805 0-5.496.488-8 1.376V87c0-4.323 4.672-7 9-7zm407 343c0 4.328-2.677 9-7 9H57c-4.458 0-9-4.542-9-9V184c0-4.411 3.589-8 8-8h400c4.411 0 8 3.589 8 8v239z" fill="currentColor"/></svg>
  )
}
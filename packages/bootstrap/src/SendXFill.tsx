import React from 'react'

export default function SendXFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0zm-4.854-1.354a.5.5 0 0 0 0 .708l.647.646l-.647.646a.5.5 0 0 0 .708.708l.646-.647l.646.647a.5.5 0 0 0 .708-.708l-.647-.646l.647-.646a.5.5 0 0 0-.708-.708l-.646.647l-.646-.647a.5.5 0 0 0-.708 0z"/></g></svg>
  )
}
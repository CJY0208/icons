import React from 'react'

export default function SocialChromeOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm0 44.799c66.084 0 124.315 35.843 154.558 89.602H256c-43.685 0-79.517 31.358-87.358 71.684l-53.758-92.969c32.474-41.431 84-68.317 141.116-68.317zM323.2 256c0 36.957-30.243 67.2-67.2 67.2s-67.2-30.243-67.2-67.2 30.243-67.2 67.2-67.2 67.2 30.243 67.2 67.2zm-246.401 0c0-32.484 8.958-62.716 24.644-89.6l77.272 134.4C194.4 327.685 222.4 345.6 256 345.6c10.085 0 20.157-2.241 29.116-5.6l-53.758 92.958C144 421.758 76.799 346.715 76.799 256zM256 435.201L333.285 300.8c7.831-13.442 12.314-28 12.314-44.8 0-26.885-12.314-50.399-31.358-67.2h107.517c8.957 21.284 13.443 43.685 13.443 67.2 0 98.557-80.644 179.201-179.201 179.201z" fill="currentColor"/></svg>
  )
}
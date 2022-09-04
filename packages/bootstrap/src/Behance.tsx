import React from 'react'

export default function Behance({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M4.654 3c.461 0 .887.035 1.278.14c.39.07.711.216.996.391c.286.176.497.426.641.747c.14.32.216.711.216 1.137c0 .496-.106.922-.356 1.242c-.215.32-.566.606-.997.817c.606.176 1.067.496 1.348.922c.281.426.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285c.246-.18.355-.497.355-.887c0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355a1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07c.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641c0-.496-.14-.852-.426-1.102c-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426c.39 0 .746-.106 1.032-.286c.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848c-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285a2.827 2.827 0 0 1-1.137-.782a2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528c0-.531.07-1.032.25-1.493c.18-.46.426-.852.747-1.207c.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355c.46.25.817.532 1.102.958c.285.39.496.851.641 1.348c.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391c-.32 0-.566.07-.781.176c-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"/></g></svg>
  )
}
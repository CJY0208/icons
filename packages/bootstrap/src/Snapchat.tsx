import React from 'react'

export default function Snapchat({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231c.162-.104.289-.187.371-.245c.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139c-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641c-.412.232-.782.53-1.097.883c-.49.562-.96 1.267-1.077 2.61c-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701c.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472c-.385.204-.786.34-.955.8c-.128.348-.044.743.28 1.075c.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4a.66.66 0 0 1 .202.09c.118.104.102.26.259.488c.079.118.18.22.296.3c.33.229.701.243 1.095.258c.355.014.758.03 1.217.18c.19.064.389.186.618.328c.55.338 1.305.802 2.566.802c1.262 0 2.02-.466 2.576-.806c.227-.14.424-.26.609-.321c.46-.152.863-.168 1.218-.181c.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087a4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047zm-1.121.602c-.684.378-1.139.337-1.493.565c-.3.193-.122.61-.34.76c-.269.186-1.061-.012-2.085.326c-.845.279-1.384 1.082-2.903 1.082c-1.519 0-2.045-.801-2.904-1.084c-1.022-.338-1.816-.14-2.084-.325c-.218-.15-.041-.568-.341-.761c-.354-.228-.809-.187-1.492-.563c-.436-.24-.189-.39-.044-.46c2.478-1.199 2.873-3.05 2.89-3.188c.022-.166.045-.297-.138-.466c-.177-.164-.962-.65-1.18-.802c-.36-.252-.52-.503-.402-.812c.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338c.027.007.054.01.082.011c.118 0 .16-.06.152-.195c-.026-.433-.087-1.277-.019-2.066c.094-1.084.444-1.622.859-2.097c.2-.229 1.137-1.22 2.93-1.22c1.792 0 2.732.987 2.931 1.215c.416.475.766 1.013.859 2.098c.068.788.009 1.632-.019 2.065c-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295c.117.309-.04.56-.401.812c-.218.152-1.003.638-1.18.802c-.184.169-.16.3-.139.466c.018.14.413 1.991 2.89 3.189c.147.073.394.222-.041.464z"/></g></svg>
  )
}
import React from 'react'
import Link from 'next/link'
import Button from 'rsuite/Button'
export default function CheckLinkBodyStyle({ href, children }) {
  const handleLinkClick = () => {
    // 在点击链接时检查 body 标签是否有 style 属性

    const body = document.body
    const hasBodyStyle = body.hasAttribute('style')

    if (hasBodyStyle) {
      body.removeAttribute('style')
    }
  }

  return (
    <>
      {/* antdMenu */}
      <Link
        href={href}
        onClick={handleLinkClick}
        style={{ textDecoration: 'none' }}
      >
        {children}
      </Link>

      {/* rsuiteMenu */}
      {/* <Button
        active={true}
        href={href}
        appearance={'ghost'}
        
        onClick={handleLinkClick}
        block
      >
        <h2 className="m-0">{children}</h2>
      </Button> */}
    </>
  )
}

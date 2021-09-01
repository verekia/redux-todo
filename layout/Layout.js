import React from 'react'

const Layout = ({ children }) => {
  return (
    <div
      className="layout"
      style={{
        backgroundColor: 'rgb(245, 245, 245)',
      }}
    >
      {children}
    </div>
  )
}

export default Layout

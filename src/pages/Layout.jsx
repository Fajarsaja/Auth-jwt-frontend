import React from 'react'
import Navbar from '../components/Navbar'


const Layout = ({children}) => {
  return (
    <div>
      <React.Fragment>
        <Navbar/>
        <div className='columns mt-6'>
            <div className='column hero has-background-light is-fullheight is-fullwitdh'>
                <main>{children}</main>
            </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Layout

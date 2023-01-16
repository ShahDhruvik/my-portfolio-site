'use-client'
import React, { memo } from 'react'
import '../../styles/services.css'
import Ser from '../../assets/ser.svg'
import Build from '../../assets/build.svg'

const Services = () => {
  console.log('services')

  return (
    <div className="pfServices">
      <div className="pfServicesWrapper">
        <h3>SERVICES</h3>
        <div className="pfServiceBox">
          <div className="leftBox">
            <Ser className="h-12 w-12" />
            <h3>FRONT-END DEVELOPMENT</h3>
            <p>
              This client side development works for creating Web Application so
              that a user can see and interact with them friendly and easy to
              use
            </p>
          </div>
          <div className="rightBox">
            <Build className="h-12 w-12" />
            <h3>BACK-END DEVELOPMENT</h3>
            <p>
              This server side development works and focuses on database,
              creates robust APIs. All the database handling are done here
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Services)

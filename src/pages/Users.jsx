import React from 'react'
import classes from '../modules/users.module.scss'

import WidgetSmall from './WidgetSmall'
import WidgetLarge from './WidgetLarge'
const Users = () => {
  return (
  
    <div className={classes.users}>
        <h1>Users</h1>
        <div className={classes.usersWidgets}>
          <WidgetSmall/>
          <WidgetLarge/>
       
        </div>
        


      
        
    
    </div>
  )
}

export default Users

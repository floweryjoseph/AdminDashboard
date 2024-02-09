import classes from '../modules/widgetSmall.module.scss'

const WidgetSmall = () => {
  return (
    <div className={classes.widgetSmall}>
   <span className={classes.widgetSmTitle}>New Join Members</span>
   <ul className={classes.widgetSmList}>
   <li className={classes.widgetSmListItem}>
    <img src="" alt=" " />
    <div className={classes.widgetSmUsername}>
    <span className={classes.widgetSmTitle}>New Join Members</span>
   
    </div>
   </li>
   </ul>
    </div>
  )
}

export default WidgetSmall

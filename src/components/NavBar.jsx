import classes from '../modules/navbar.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const NavBar = () => {
  return (
    <div className={classes.navbar}>
    <div className={classes.wrapper}>
        <div className={classes.search}>
            <input type="text" placeholder="Search..."/>
            <SearchIcon />
        </div>
        <div className={classes.items}>
            <div className={classes.item}>
              <LanguageIcon className={classes.icon}/>English
            </div>
            <div className={classes.item}>
            <DarkModeOutlinedIcon className={classes.icon}/>
            </div>
            <div className={classes.item}>
              <FullscreenExitOutlinedIcon className={classes.icon}/>
            </div>
            <div className={classes.item}>
              <NotificationsNoneOutlinedIcon className={classes.icon}/>
              <div className={classes.counter}>1</div>
            </div>
            <div className={classes.item}>
            <ChatBubbleOutlineOutlinedIcon className={classes.icon}/>
            <div className={classes.counter}>2</div>
            </div>
            <div className={classes.item}>
            <ListOutlinedIcon className={classes.icon}/>
            </div>

            <div className={classes.item}>
            <img src="/images/admin.jpg" className={classes.avatar}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar

import classes from '../modules/widget.module.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Widget = ({type}) => {
  let data;
//temporary
const amount =100;
const diff=20
  switch(type){
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineIcon  className={classes.icon}/>,
      };
      break;

      case "orders":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: <ShoppingCartIcon  className={classes.icon}/>,
        };
        break;

        case "earnings":
          data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnIcon  className={classes.icon}/>,
          };
          break;


          case "balance":
            data = {
              title: "BALANCE",
              isMoney: true,
              link: "See Details",
              icon: <AccountBalanceWalletIcon  className={classes.icon}/>,
            };
            break;
      default:
      break;
  }




  return (
    <div className={classes.widget}>
      <div className={classes.left}>
        <span className={classes.title}>{data.title}</span>
        <span className={classes.counter}>{data.isMoney && "$"} {amount}</span>
        <span className={classes.link}>{data.link}</span>
      </div>
      <div className={classes.right}>
        <div className={classes.percentage_positive}><KeyboardArrowUpIcon />{diff}%</div>
       {data.icon}
      </div>
    </div>
  )
}

export default Widget

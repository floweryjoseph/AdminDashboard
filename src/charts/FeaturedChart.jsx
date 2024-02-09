import classes from "../modules/featuredChart.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const FeaturedChart = () => {
  return (
    <div className={classes.featured}>
      <div className={classes.top}>
        <h2 className={classes.title}>Total Revenue</h2>
        <MoreVertIcon />
      </div>
      <div className={classes.bottom}>
        <div className={classes.featuredChart}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className={classes.title}>Total Sales Made Today</p>
        <p className={classes.amount}>$450</p>
        <p className={classes.desc}>
          Previous Transactions Processing. Last Payments May not Be included
        </p>
        <div className={classes.summary}>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Target</div>
            <div className={classes.itemResult.positive}>
              <KeyboardArrowDownIcon fontSize="small" />
              <div className={classes.resultAmount}>$12.5</div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Target</div>
            <div className={classes.itemResult.positive}>
              <KeyboardArrowDownIcon fontSize="small" />
              <div className={classes.resultAmount}>$12.5</div>
            </div>
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Target</div>
              <div className={classes.itemResult.negative}>
                <KeyboardArrowDownIcon fontSize="small" />
                <div className={classes.resultAmount}>$12.5</div>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChart;

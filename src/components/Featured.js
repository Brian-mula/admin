import React from "react";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import { makeStyles } from "@material-ui/core";
import "./featured.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

const usestyles = makeStyles({
  featured: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});

function Featured() {
  const classes = usestyles();
  return (
    <div>
      <div className={classes.featured}>
        <div className="featureditem">
          <span className="featureditemtitle">Revenue</span>
          <div className="featuredmoney">
            <span className="money">Ksh. 4000</span>
            <span className="rate">
              - 11.6
              <ArrowDownwardOutlinedIcon />
            </span>
          </div>
          <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featureditem">
          <span className="featureditemtitle">Sales</span>
          <div className="featuredmoney">
            <span className="money">Ksh. 400000</span>
            <span className="rate">
              - 1.6
              <ArrowDownwardOutlinedIcon />
            </span>
          </div>
          <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featureditem">
          <span className="featureditemtitle">Expenses</span>
          <div className="featuredmoney">
            <span className="money">Ksh. 40000</span>
            <span className="rate">
              - 21.6
              <ArrowDownwardOutlinedIcon />
            </span>
          </div>
          <span className="featuredsub">Compared to last month</span>
        </div>
        <div className="featureditem">
          <span className="featureditemtitle">Stock</span>
          <div className="featuredmoney">
            <span className="money">Ksh. 500000</span>
            <span className="rate">
              +21.6
              <ArrowUpwardOutlinedIcon />
            </span>
          </div>
          <span className="featuredsub">Compared to last month</span>
        </div>
      </div>
    </div>
  );
}

export default Featured;

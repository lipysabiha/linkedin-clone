import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className = "widgets_article">
                <div className="widgets_articleLeft">
                    <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className = "widgets">
            <div className="widgets_header">
                <h2>LinkedIn news</h2>
                <InfoIcon />
            </div>

            {newsArticle("React is back", "Top news - 99548 readers")}
            {newsArticle("Corona  virus: UK updates", "Top news - 8865 readers")}
            {newsArticle("Telsa hits new highs", "Cars & auto - 265 readers")}
            {newsArticle("Is Redux too good??", "Code - 1123 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Top news - 5451 readers")}

        </div>
    );
}

export default Widgets;
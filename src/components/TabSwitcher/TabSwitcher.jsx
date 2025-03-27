import Post from "../Post/Post";
import {useEffect, useState} from "react";
import styles from "./TabSwitcher.module.css";

class Content {
    constructor() {
        this.type
        this.date
        this.author
        this.text
    }
}

function TabSwitcher({posts}) {
    const [tab, setTab] = useState("Events");
    
    let homeworkTab = [], eventsTab = []; // Initialize as empty arrays

    if (Array.isArray(posts)) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].type === "Homework") {
                if (i > 0 && posts[i].date == posts[i-1].date) {
                    homeworkTab.push(<Post key={`homework-post-${i}`} author={posts[i].author} text={posts[i].text} />);
                } else {
                    homeworkTab.push(<Post key={`homework-post-${i}`} date={posts[i].date} author={posts[i].author} text={posts[i].text} />);
                }
            } else {
                if (i > 0 && posts[i].date == posts[i-1].date) {
                    eventsTab.push(<Post key={`events-post-${i}`} author={posts[i].author} text={posts[i].text} />);
                } else {
                    eventsTab.push(<Post key={`events-post-${i}`} date={posts[i].date} author={posts[i].author} text={posts[i].text} />);
                }
            }
        }
    }

    const element =
  <>
    <div className={styles.switchContainer}>
      <button onClick={() => setTab("Events")} className={[styles.tabName, tab == "Events" ? styles.selectedTabName : ""].join(" ")} id="Events-btn">Events</button>
      <button onClick={() => setTab("Homework")} className={[styles.tabName, tab == "Homework" ? styles.selectedTabName : ""].join(" ")} id="Homework-btn">Homework</button>
      <div className={[styles.pill, tab === "Homework" ? styles.pillHomework : styles.pillEvents].join(" ")}></div>
    </div>
    <div className={styles.container}>
        <div className={styles.containerMargin}>
            {tab === "Homework" ? homeworkTab : eventsTab}
        </div>
    </div>
  </>;

  return element;
}

export default TabSwitcher;
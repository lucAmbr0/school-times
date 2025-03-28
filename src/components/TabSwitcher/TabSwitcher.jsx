import Post from "../Post/Post";
import {useEffect, useState, useRef} from "react";
import styles from "./TabSwitcher.module.css";
import { useSwipeable } from "react-swipeable";

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
    const initialRender = useRef(true); // Use useRef to track initial render
    
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

    const postsContent = (
        <div className={tab === "Homework" ? styles.appearRight : styles.appearLeft}>
            {tab === "Homework" ? homeworkTab : eventsTab}
        </div>
    );

    let containerStyle;
    const [swipeProgress, setSwipeProgress] = useState(0);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            setTab("Homework");
            setSwipeProgress(0);
        },
        onSwipedRight: () => {
            setTab("Events");
            setSwipeProgress(0);
        },
        onSwiping: (eventData) => {
            const deltaX = eventData.deltaX;
            const progress = Math.min(Math.abs(deltaX) / window.innerWidth, 1); // Normalize progress
            setSwipeProgress(tab === "Events" ? progress * 100 : -progress * 100);
        },
    });

    const pillStyle = {
        transform: `translateX(${tab === "Homework" ? 100 + swipeProgress : -100 + swipeProgress}%)`,
        transition: swipeProgress === 0 ? "transform 0.2s ease" : "none",
    };

    containerStyle = {
        transform: `translateX(${-swipeProgress/20}%)`,
        transition: swipeProgress === 0 ? "transform 0.2s ease" : "none",
    };

    const element =
    <div {...swipeHandlers}>
        <div className={styles.switchContainer}>
            <button onClick={() => setTab("Events")} className={[styles.tabName, tab == "Events" ? styles.selectedTabName : ""].join(" ")} id="Events-btn">Events</button>
            <button onClick={() => setTab("Homework")} className={[styles.tabName, tab == "Homework" ? styles.selectedTabName : ""].join(" ")} id="Homework-btn">Homework</button>
            <div className={[styles.pill, tab === "Homework" ? styles.pillHomework : styles.pillEvents].join(" ")} style={pillStyle}></div>
        </div>
        <div style={containerStyle} className={styles.container}>
            <div className={styles.containerMargin}>
                {postsContent}
            </div>
        </div>
    </div>;

  return element;
}

export default TabSwitcher;
import Post from "../Post/Post";
import { useState, useRef} from "react";
import styles from "./TabSwitcher.module.css";
import { useSwipeable } from "react-swipeable";
import useVibration from "../../scripts/useVibration";

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
    const vibrate = useVibration();
    
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
            vibrate(5);
        },
        onSwipedRight: () => {
            setTab("Events");
            setSwipeProgress(0);
            vibrate(5);
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
        transform: `translateX(${-swipeProgress/10}%)`,
        transition: swipeProgress === 0 ? "transform 0.2s ease" : "none",
        opacity: tab === "Events" ? 1-(swipeProgress/120) : 1+(swipeProgress/120)
    };

    const element =
    <div {...swipeHandlers}>
        <div className={styles.switchContainer}>
            <button onClick={() => {vibrate(5); setTab("Events")}} className={[styles.tabName, tab == "Events" ? styles.selectedTabName : ""].join(" ")} id="Events-btn">Events</button>
            <button onClick={() => {vibrate(5); setTab("Homework")}} className={[styles.tabName, tab == "Homework" ? styles.selectedTabName : ""].join(" ")} id="Homework-btn">Homework</button>
            <div className={[styles.pill, tab === "Homework" ? styles.pillHomework : styles.pillEvents].join(" ")} style={pillStyle}></div>
        </div>
        <div className={styles.container}>
            <div style={containerStyle} className={styles.containerMargin}>
                {postsContent}
            </div>
        </div>
    </div>;

  return element;
}

export default TabSwitcher;
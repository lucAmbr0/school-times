import boxStyles from "../Box.module.css";
import SmallEventChip from "./SmallEventChip/SmallEventChip";
import { samplePosts } from "../../../scripts/events";
import styles from "./UpcomingEventsBox.module.css";

function UpcomingEventsBox() {

  const generateEvents = () => {
    let events = [];
    let i = 0;
    for (let upcEvent of samplePosts) {
      events.push(
        <SmallEventChip day={upcEvent.date} eventName={upcEvent.text} key={"upcEvent-" + i} />
      )
      i++;
      if (i >= 5) break;
    }
    return events;
  }

  const events = generateEvents();
  const noEventsElement = <h3 className={styles.noEventsLabel}>No upcoming events</h3>
  
  return (
    <div className={boxStyles.box}>
        <h3 className={boxStyles.boxTitle}>Upcoming</h3>
        <div className={styles.eventsContainer}>
          {events.length > 0 ? events : noEventsElement}
        </div>
    </div>
  );
}

export default UpcomingEventsBox;

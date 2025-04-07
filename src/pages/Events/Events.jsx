import TabSwitcher from "../../components/TabSwitcher/TabSwitcher";
import styles from "./Events.module.css"
import { samplePosts } from "../../scripts/events";

function Events() {
  
  const element = (
    <>
    <TabSwitcher posts={samplePosts} />
  </>
  )
  
  return ( element );
}

export default Events;

import TabSwitcher from "../../components/TabSwitcher/TabSwitcher";
import styles from "./Events.module.css"

const samplePosts = [
  { type: "Events", date: "Tue, 01 April", author: "Irene Gonzalez", text: "Prepare for English test." },
  { type: "Events", date: "Tue, 01 April", author: "Henrietta Mullins", text: "Art exhibition." },
  { type: "Events", date: "Mon, 21 April", author: "Mayme Robinson", text: "Sports day practice." },
  { type: "Events", date: "Mon, 21 April", author: "Mae Stokes", text: "Science project submission." },
  { type: "Events", date: "Sat, 28 June", author: "Blake Bowers", text: "Solve physics problems." },
  { type: "Events", date: "Sat, 28 June", author: "Lloyd Walsh", text: "Music competition." },
  { type: "Events", date: "Sat, 27 September", author: "Hilda Hodges", text: "Parent-teacher meeting." },
  { type: "Events", date: "Fri, 21 November", author: "Charlie Brady", text: "Complete math exercises." },
  { type: "Events", date: "Fri, 21 November", author: "Isabelle Stephens", text: "School assembly at 10 AM." },
  { type: "Events", date: "Fri, 21 November", author: "Patrick Henry", text: "Read chapter 4 of history book." },
  { type: "Homework", date: "Wed, 15 January", author: "Devin Lucas", text: "1733 Modap Road (727) 611-8158"},
  { type: "Homework", date: "Wed, 15 January", author: "Josephine Clayton", text: "218 Dabu Parkway (377) 530-9309"},
  { type: "Homework", date: "Fri, 21 November", author: "Curtis Nguyen", text: "1239 Vevnon Loop (308) 462-1522"},
  { type: "Homework", date: "Fri, 21 November", author: "Calvin Hudson", text: "1697 Pifuv Trail (959) 292-5431"},
  { type: "Homework", date: "Fri, 21 November", author: "Warren Thornton", text: "173 Ovezo Grove (553) 813-3702"},
  { type: "Homework", date: "Fri, 21 November", author: "Callie Logan", text: "380 Ubebo Pike (357) 796-1645"},
  { type: "Homework", date: "Mon, 21 April", author: "Dale Rowe", text: "1364 Zirel Lane (612) 992-1957"},
  { type: "Homework", date: "Sat, 28 June", author: "Effie Powers", text: "1163 Vedwop Avenue (678) 805-3834"},
  { type: "Homework", date: "Sat, 28 June", author: "Leah Quinn", text: "1245 Ipdi Heights (551) 473-2794"},
];

function Events() {
  
  const element = (
    <>
    <TabSwitcher posts={samplePosts} />
  </>
  )
  
  return ( element );
}

export default Events;

import DarkModeSwitch from "../../components/Switch/DarkModeSwitch/DarkModeSwitch";
import ThemeSelectorBox from "../../components/ThemeSelectorBox/ThemeSelectorBox";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import TextInput from "../../components/TextInput/TextInput";
import useVibration from "../../scripts/useVibration";
import Switch from "../../components/Switch/Switch/Switch";
import styles from "./Settings.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useState } from "react";
import { useData } from "../../scripts/useData";
import { Data } from "../../scripts/Data";
import { showSnackbar } from "../../scripts/snackbar";

function Settings({ onBack = () => {} }) {
  const vibrate = useVibration();
  const [data, setData] = useData();
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [timetables, setTimetables] = useState(data.timetables);

  // const handleBack = () => {
  //   vibrate(5);
  //   document.querySelector("#settings").classList.add(styles.exitAnimation);
  //   document.querySelector("#pageHeader").classList.add(styles.exitAnimation);
  //   setTimeout(() => {
  //     onBack();
  //   }, 300);
  // };

  const syncUserInfo = () => {
    setTimeout(() => {
      const newData = { ...data };
      let userTimetableIdx = timetables.indexOf(timetables.find(t => t.className == data.user.className));
      if (userTimetableIdx == - 1) {
        userTimetableIdx = 0;
        newData.user.className = timetables[0];
        newData.user.name = timetables[0];
      }
      newData.user.userTimetableIdx = userTimetableIdx;
      newData.user.name = timetables[userTimetableIdx].matesNames;
      
      setData(newData);
      timetables.forEach(t => {
        t.isUser = timetables.indexOf(t) == userTimetableIdx;
      })
    }, 20);
  };

  const handlePasteLink = (idx) => async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (!text) return;

      // const path = `settings.widgets.link${idx}.url`;
      const newData = { ...data };
      if (idx == 1) {
        newData.settings.widgets.link1.url = text;
      } else if (idx == 2) {
        newData.settings.widgets.link2.url = text;
      }
      setData(newData);
      showSnackbar(`Saved link ${text.substring(0, 20)} as custom link ${idx}`);
    } catch (err) {
      console.error("Errore durante l'incolla dal clipboard:", err);
      showSnackbar("Couldn't read link URL from your clipboard");
    }
  };

  const handleBackup = () => {
    const file = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    const fileName = `school-times_backup_${new Date().getDate()}.json`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    showSnackbar("Backup downloaded successfully!")
  }

  const handleRestore = () => {
    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const importedFile = JSON.parse(e.target.result);
            if (importedFile) {
              const newData = Object.assign(
                new Data(),
                importedFile
              );
              localStorage.clear();
              localStorage.setItem("data", JSON.stringify(newData));
              showSnackbar("App data restored successfully!");
              window.location.reload();
            } else {
              showSnackbar("Invalid backup file.");
            }
          } catch (error) {
            console.log(error);

            showSnackbar("Error reading backup file.");
          }
        };
        reader.readAsText(file);
      }
    });
  }

  const handleReset = () => {
    if (confirm("Are you sure you want to delete all the app data? This action cannot be undone, it is recommended to make a backup before resetting the app.")) {
      localStorage.clear();
      window.location.reload();
    }
  }

  const element = (
    <>
      {showThemeSelector ? (
        <ThemeSelectorBox backAction={() => setShowThemeSelector(false)} />
      ) : (
        ""
      )}
      {/* <PageHeader handleBack={handleBack} /> */}
      <div id={"settings"} className={styles.container}>
        <h1 className={styles.title}>Settings</h1>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Preferences</h3>
          <div className={styles.settingsGrid}>
            <label className={styles.settingLabel}>Dark mode</label>
            <DarkModeSwitch />
            <label className={styles.settingLabel}>Color theme</label>
            <div className={styles.themeSelectorBtnContainer}>
              <Button
                onClick={() => setShowThemeSelector(true)}
                border="soft"
                variant="filled"
                iconName="edit"
                text={data.settings.palette}
              />
            </div>
            <label
              htmlFor="hapticFeedbackSwitch"
              className={styles.settingLabel}
            >
              Haptic feedback
            </label>
            <Switch
              id={"hapticFeedbackSwitch"}
              path={"settings.hapticFeedback"}
            />
            <label className={styles.settingLabel}>Language</label>
            <Dropdown path={"settings.language"} options={["English"]} />
          </div>
        </div>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Widgets</h3>
          <div className={styles.settingsGrid}>
            <label
              htmlFor="matesTimetablesWidgetSwitch"
              className={styles.settingLabel}
            >
              Mates' timetables
            </label>
            <Switch
              id={"matesTimetablesWidgetSwitch"}
              path={"settings.widgets.matesTimetables"}
            />
            {/* <label
              htmlFor="upcomingEventsWidgetSwitch"
              className={styles.settingLabel}
            >
              Upcoming events
            </label>
            <Switch
              id={"upcomingEventsWidgetSwitch"}
              path={"settings.widgets.upcomingEvents"}
            /> */}
            <label
              htmlFor="coffeeKeyWidgetSwitch"
              className={styles.settingLabel}
            >
              Coffee key
            </label>
            <Switch
              id={"coffeeKeyWidgetSwitch"}
              path={"settings.widgets.coffeeKey"}
            />
            <label
              htmlFor="coffeeKeyWidgetSwitch"
              className={styles.settingLabel}
            >
              Homework
            </label>
            <Switch
              id={"coffeeKeyWidgetSwitch"}
              path={"settings.widgets.homework"}
            />
            <label htmlFor="link1WidgetSwitch" className={styles.settingLabel}>
              Custom link 1
            </label>
            <Switch
              id={"link1WidgetSwitch"}
              path={"settings.widgets.link1.visible"}
            />
            <label htmlFor="link2WidgetSwitch" className={styles.settingLabel}>
              Custom link 2
            </label>
            <Switch
              id={"link2WidgetSwitch"}
              path={"settings.widgets.link2.visible"}
            />
          </div>
        </div>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Custom links</h3>
          <div className={styles.settingsGrid}>
            <label htmlFor="link1Switch" className={styles.settingLabel}>
              Link 1
            </label>
            <div className={styles.customLinkContainer}>
              <TextInput
                id={"link1Label"}
                placeholder={"Label"}
                path={"settings.widgets.link1.label"}
                maxLength={200}
              />
              <Button
                onClick={handlePasteLink(1)}
                iconName="content_paste"
                border="soft"
                variant="outlined"
                text="Paste"
              />
            </div>
            <label htmlFor="link1Switch" className={styles.settingLabel}>
              Link 2
            </label>
            <div className={styles.customLinkContainer}>
              <TextInput
                id={"link1Label"}
                placeholder={"Label"}
                path={"settings.widgets.link2.label"}
                maxLength={200}
              />
              <Button
                onClick={handlePasteLink(2)}
                iconName="content_paste"
                border="soft"
                variant="outlined"
                text="Paste"
              />
            </div>
          </div>
        </div>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Customization</h3>
          <div className={styles.settingsGrid}>
            <label htmlFor="name" className={styles.settingLabel}>
              Name
            </label>
            <TextInput
              onChangeAction={syncUserInfo}
              maxLength={20}
              path={`timetables[${timetables.indexOf(
                timetables.find((t) => t.isUser)
              )}].matesNames`}
              id={"name"}
              name={"Name"}
            />
            <label htmlFor="class-name" className={styles.settingLabel}>
              Class name
            </label>
            <Dropdown
              onChange={syncUserInfo}
              path="user.className"
              id={"class-name"}
              name={"Class name"}
              options={timetables.map(t => t.className)}
            />
            {/* <TextInput
              onChangeAction={syncUserInfo}
              maxLength={5}
              path={`timetables[${timetables.indexOf(
                timetables.find((t) => t.isUser)
              )}].className`}
              id={"class-name"}
              name={"Class name"}
            /> */}
            <label htmlFor="school-name" className={styles.settingLabel}>
              School name
            </label>
            <TextInput
              maxLength={40}
              path={"user.schoolName"}
              id={"school-name"}
              name={"School name"}
            />
            <label htmlFor="favorite-subject" className={styles.settingLabel}>
              Favorite subject
            </label>
            <TextInput
              maxLength={40}
              path={"user.favoriteSubject"}
              id={"favorite-subject"}
              name={"Favorite subject"}
            />
          </div>
        </div>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>School data</h3>
          <p className={styles.schDataLabel}>
            Write your rooms, subjects and teachers in the boxes below separated
            by comma to fill classes' timetables
          </p>
          <h3 className={styles.textAreaLabel}>Rooms</h3>
          <TextInput
            maxLength={512}
            path={"user.rooms"}
            type="textarea"
            id={"rooms"}
            name={"Rooms"}
            placeholder={"Room 25, Electronics Lab 2, Main hall"}
          />
          <h3 className={styles.textAreaLabel}>Subjects</h3>
          <TextInput
            maxLength={512}
            path={"user.subjects"}
            type="textarea"
            id={"subjects"}
            name={"Subjects"}
            placeholder={"English, Maths, History"}
          />
          <h3 className={styles.textAreaLabel}>Teachers</h3>
          <TextInput
            maxLength={512}
            path={"user.teachers"}
            type="textarea"
            id={"teachers"}
            name={"Teachers"}
            placeholder={"Bess Ross, Jesus Byrd, Emily Schmidt"}
          />
        </div>
        <div className={styles.settingsSection}>
          <h3 className={styles.sectionTitle}>Backup</h3>
          <div className={styles.settingsGrid}>
            <label htmlFor="backup" className={styles.settingLabel}>
              Backup all app data
            </label>
            <Button
              onClick={handleBackup}
              iconName="backup"
              border="soft"
              variant="filled"
              text="Backup"
            />
            <label htmlFor="restore" className={styles.settingLabel}>
              Restore a backup
            </label>
            <Button
              onClick={handleRestore}
              iconName="restore"
              border="soft"
              variant="filled"
              text="Restore"
            />
            <label htmlFor="delete" className={styles.settingLabel}>
              Reset app data
            </label>
            <Button
              onClick={handleReset}
              iconName="delete"
              border="soft"
              variant="outlined"
              text="Reset data"
            />
          </div>
        </div>
      </div>
    </>
  );

  return element;
}

export default Settings;

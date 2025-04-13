![GitHub repo size](https://img.shields.io/github/repo-size/lucAmbr0/school-times)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/lucAmbr0/school-times)
![GitHub License](https://img.shields.io/github/license/lucAmbr0/school-times)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability-percentage/lucAmbr0/school-times)


* Worked on this project for: <a href="https://wakatime.com/badge/github/lucAmbr0/school-times"><img src="https://wakatime.com/badge/github/lucAmbr0/school-times.svg?style=flat" alt="wakatime"></a>
# Introduction

<div style="display: flex">
  <img width="50%" src="https://storage.ko-fi.com/cdn/generated/fhfuc7slzawvi/2025-04-12_rest-a79d5e1b01cc7b09aa44f99e0e6f2d06-w2eypt8y.jpg" >
</div>

* **School Times** is the third remake of the best school managing webapp ever! **An all-in-one web tool** that allows you to easily see everything that you need to know during your **school day**, from timetables (supports up to 10 timetables) to homework and tests, easily organized on your phone at a glance.

## :ledger: Index

* [About](#beginner-about)
* [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Getting started](#pencil-getting-started)
  - [Customization](#art-customization)
* [Development](#wrench-development)
  - [Pre-Requisites](#notebook-pre-requisites)
  - [File Structure](#file_folder-file-structure)
* [Community](#cherry_blossom-community)
  - [Contribution](#fire-contribution)
  - [Guideline](#exclamation-guideline)  
* [FAQ](#question-faq)
* [Gallery](#camera-gallery)
* [Credit/Acknowledgment](#star2-creditacknowledgment)
* [License](#lock-license)

##  :beginner: About
The latest School Times app is your ultimate tool for managing school life! Save up to 10 timetables and easily share to your friends. The app prioritizes speed and simplicity, with no need for a database—everything is stored securely on your device. Featuring an improved user interface, better performance, and enhanced compatibility, it’s perfect for students on the go. New features include better code practices with ReactJS, view a detailed weekly overview, import tests, homework, and more school events from CVV. Lightweight and efficient, the app keeps everything you need for your school day in one place, making it easier than ever to stay organized and focused.

## :zap: Usage
Right when you open the app, the home tab gives you all information you need about the current day and time grouped and organized in beautiful and intuitive boxes that you can customize in settings.

###  :electric_plug: Installation
By clicking the link that you see at the top of the repo you can already access all features of the app on your browser (the app is mobile-only, to access on desktop resize your tab to a vertical ratio).
By clicking the three dots on the website you can save a bookmark of it on your phone's homescreen or download it as a Progressive Web App on Android devices.

###  :pencil: Getting started
The first time you open the app you should enter your class data.
* First, tap the three dots on the top-right corner and then Settings.
* Under "Customization" enter your name, class name, school name and favorite subject (optional for further customization).
* Then, scroll until "School data" and enter all rooms, subjects and teachers you want to put in your timetable, separated by comma. (E.g. "Room 12, Room 14, Room 17, Electronics Lab 1", "C.S., History", "Mrs. White, Mr. Schrader").
* Once you're done, go back to the home screen and open "Timetables" (the icon with a table and a pencil at the top-right corner), and for each day and time of the week select from the dropdown menu the values you wrote in settings.
* You can add up to 10 timetables if you want to meet your friends at school and you can also share and import them seamlessly as files, just share the file to your friends or tap import and select the file to get their timetable. Note that any new room, subject or teacher missing in your settings will be automatically added.

###  :art: Customization
When you're done configuring your timetables you might want to explore advanced features to improve your experience:
* In Settings you can customize some features such as your favorite color theme and light/dark scheme, toggling haptic feedback and any widget in your Home tab.
* If have any often used website related to school you can save your most used websites such as your school website and google classroom as custom links to access them easily from this app.
* In Timetables you can choose the layout used in Explore to show information of your mates' timetables to see information how you prefer.
* If you often get coffee at school and you happen to forget how much money you have left on your key you can enable your "coffee key" widget and increase or decrease credit by swiping up and down on the widget.
* The homework widget lets you keep track of things to do, swipe left-right to set finished tasks and up-down to set tasks to do.

##  :wrench: Development

### :notebook: Pre-Requisites
There are no special prerequisites for this project other than the following:
* A *chromium browser* like Google Chrome, Brave, Edge, Opera... (Supported but not fully tested on Safari and Firefox)

###  :file_folder: File Structure

```
school-times
│
│   .gitignore
│   eslint.config.js
│   index.html
│   manifest.json
│   node_modules
│   package-lock.json
│   package.json
│   public
│   README.md
│
├───public
│   ├───icons
│   └───screenshots
├───assets
│   ├───fonts
│   └───styles
└───src
    ├───assets
    │   ├───fonts
    │   └───styles
    ├───components
    │   ├───Boxes
    │   │   ├───LargeMateClassBox
    │   │   ├───SmallChip
    │   │   ├───SmallMateClassBox
    │   │   ├───UpcomingEventsBox
    │   │   │   └───SmallEventChip
    │   │   └───UserClassBox
    │   ├───Button
    │   ├───Dropdown
    │   ├───Header
    │   ├───Navbar
    │   │   └───NavbarBtn
    │   ├───Overlay
    │   ├───Post
    │   ├───ProfileCard
    │   │   ├───FavoriteSubject
    │   │   ├───GradesList
    │   │   ├───ProfileOverview
    │   │   └───StudentStats
    │   ├───ProgressBar
    │   │   ├───PercentageProgressBar
    │   │   └───StepProgressBar
    │   ├───Separator
    │   ├───SwiperWrap
    │   ├───Switch
    │   │   └───DarkModeSwitch
    │   ├───Table
    │   ├───TabSwitcher
    │   ├───TextInput
    │   ├───VerticalDots
    │   └───VerticalMenu
    ├───context
    ├───pages
    │   ├───Events
    │   ├───Explore
    │   ├───Home
    │   ├───Profile
    │   └───Settings
    └───scripts
```

## :cherry_blossom: Community

Teamwork is important! If you want to contribute and help in this project, fixing bugs, adding features or changing the look and feel of the app feel free to contribute!
If you like this app and find it useful consider spreading the word to your friends!
You can reach me out on my socials for any question/critics.

 ###  :fire: Contribution

 1. *Report a bug* <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it and I will take care of it.

 2. *Request a feature* <br>
 You can also request for a feature and if it will viable, it will be picked for development.  

 3. *Create a pull request* <br>
 It can't get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues and make a pull request.

 > If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).

### :exclamation: Guideline
* Feel free to change whatever you want however you want, but try to keep the code tidy and readable.
* Remember this project is open-source and offered for free, therefore no compensation is provided to contributors, but you will still get credited in the app About page and on this repository.
* For more complex operations you might want to reach me to collaborate together so that we can do our best on this project.


## :question: FAQ
* **How can I share my timetable with a friend or across devices?** <br>
To share your timetable, go to the Timetables tab in the app, select the timetable you want to send and tap share. Send the downloaded file to your friend. Your friends just needs to open the same Timetables tab, tap "Import" and select the json file. This method is fast, simple, and doesn’t require internet connectivity or saving on cloud.

* **Can I save more than one timetable?** <br>
Yes! The app allows you to save up to 10 separate timetables. This is perfect when you want to meet friends at your school during breaks, or if you're a teacher for multiple classes. You can easily switch between them whenever needed.

* **What happens if I clear my browser’s data? Will I lose my timetables?** <br>
Yes, since the app relies on localStorage, clearing your browser data will erase your saved timetables. To prevent this, save a backup of all app data by tapping "Backup" at the bottom of Settings and store it securely.

* **Does the app send my data to a server or require an internet connection?** <br>
No, the app is completely offline. All your data is stored locally on your device, ensuring privacy and fast performance. There’s no need for sign-ups, logins, or internet access to use the app. Remember that eseential app data and assets are saved in the browser's cache and clearing the cache will make the app unusable until a network connection is established again.
<br>

##  :camera: Gallery
Not ready yet :D
<div style="display: flex">
<!-- <img src="https://github.com/lucAmbr0/SchoolTimetable/blob/master/screenshots/mobile-screenshot1.png?raw=true" width="200" /> -->
<!-- <img src="https://github.com/lucAmbr0/SchoolTimetable/blob/master/screenshots/mobile-screenshot2.png?raw=true" width="200" /> -->
<!-- <img src="https://github.com/lucAmbr0/SchoolTimetable/blob/master/screenshots/mobile-screenshot3.png?raw=true" width="200" /> -->
</div>


## :star2: Credit/Acknowledgment
Earn a spot here by contributing!

##  :lock: License
This project is licensed with the GNU General Public License v3.0, please refer to the file to know more.
<br>
Feel free to reuse this project however you'd like but be sure to give credit to this repository.
<br>
If you found this project useful you might consider <a href="https://ko-fi.com/lucambr0">buying me a coffee</a>.

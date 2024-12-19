![GitHub repo size](https://img.shields.io/github/repo-size/lucAmbr0/school-times)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/lucAmbr0/school-times)
![GitHub License](https://img.shields.io/github/license/lucAmbr0/school-times)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability-percentage/lucAmbr0/school-times)


* Worked on this project for: <a href="https://wakatime.com/badge/github/lucAmbr0/school-times"><img src="https://wakatime.com/badge/github/lucAmbr0/school-times.svg?style=flat" alt="wakatime"></a>
# Introduction
> This project is in early stage, many things may change often.
* **School Times** is the third remake of the best school managing webapp ever! **An all-in-one web tool** that allows you to easily see everything that you need to know during your **school day**, from timetables (supports multiple classes) to homework and tests, comfortably organized on your phone at a glance.

## :ledger: Index

* [About](#beginner-about)
* [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
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
The latest School Times app is your ultimate tool for managing school life! Save up to 5 customizable class timetables and easily share them between devices using compact JavaScript strings. The app prioritizes speed and simplicity, with no need for a database—everything is stored securely on your device. Featuring an improved user interface, better performance, and enhanced compatibility, it’s perfect for students on the go. New features include better code practices with react, view a detailed weekly overview, and add tests, homework, and more school events. Lightweight and efficient, the app keeps everything you need for your school day in one place, making it easier than ever to stay organized and focused.

## :zap: Usage
Right when you open the app, the home tab gives you all information you need about the current day and time grouped and organized in beautiful and intuitive boxes that you can customize.

The app provides 3 main features:
<br> **Timetables** - Go to settings and write once the names of your subjects, teachers and rooms. Then you can start adding different classes and fill the tables with data, so that you can see them at a glance on your home tab, or share them both as app data to your friends to let them find you at school, or save those timetables as images for you to carry everywhere. CSV export is also supported!

###  :electric_plug: Installation
By clicking the link that you see at the top of the repo you can already access all features of the app on your browser.
By clicking the three dots on the website you can save a bookmark of it on your phone's homescreen or download it as a Progressive Web App on Android devices with Chrome.

##  :wrench: Development

### :notebook: Pre-Requisites
There are no special prerequisites for this project other than the following:
* A *chromium browser* like Google Chrome, Brave, Edge, Opera... (Supported but not optimised for Safari and Firefox, which may not be compatible with some CSS rules)

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
│   src
│   vite.config.js
│
├───public
│   ├───icons
│   │       icon-any-192x192.png
│   │       icon-any-512x512.png
│   │       icon-maskable-192x192.png
│   │       icon-maskable-512x512.png
│   │
│   └───screenshots
└───src
    │   App.css
    │   App.jsx
    │   index.css
    │   main.jsx
    │
    ├───assets
    │   ├───fonts
    │   │       Inter-Italic.ttf
    │   │       Inter.ttf
    │   │
    │   └───styles
    │           colors.css
    │           fonts.css
    │
    └───components
        ├───Button
        │       Button.jsx
        │       Button.module.css
        │
        └───Tables
                ButtonTable.jsx
                ButtonTable.module.css
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
There are no particular guidelines to follow to contribute to the project.
<br>
Feel free to change whatever you want however you want, but try to keep the code tidy and readable.


## :question: FAQ
* **How can I share my timetable with a friend or across devices?** <br>
To share your timetable, go to the export section in the app, and copy the JavaScript string provided. Send this string to your friend or another device. They can paste it into the import section to load the exact same timetable. This method is fast, simple, and doesn’t require internet connectivity or accounts.

* **Can I save more than one timetable?** <br>
Yes! The app allows you to save up to 5 separate timetables. This is perfect when you want to meet friends at your school during breaks, or if you're a teacher for multiple classes. You can easily switch between them whenever needed.

* **What happens if I clear my browser’s data? Will I lose my timetables?** <br>
Yes, since the app relies on localStorage, clearing your browser data will erase your saved timetables. To prevent this, export your timetables as JavaScript strings and store them safely. You can re-import them anytime if needed.

* **Does the app send my data to a server or require an internet connection?** <br>
No, the app is completely offline. All your data is stored locally on your device, ensuring privacy and fast performance. There’s no need for sign-ups, logins, or internet access to use the app.
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
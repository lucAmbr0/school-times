export class Data {
    constructor() {
        this.user = new Person(true);
        this.timetables = [new Timetable(true, "you")];
        this.settings = new Settings();
    }

    saveToLocalStorage() {
        localStorage.setItem('data', JSON.stringify(this));
    }

    static loadFromLocalStorage() {
        const data = localStorage.getItem('data');
        if (data) {
            const parsedData = JSON.parse(data);
            const dataObj = new Data();
            Object.assign(dataObj, parsedData);
            return dataObj;
        }
        return new Data();
    }

    updateUserDataFromTimetables() {
        const roomsSet = new Set(this.user.rooms.split(", ").filter(room => room));
        const subjectsSet = new Set(this.user.subjects.split(", ").filter(subject => subject));
        const teachersSet = new Set(this.user.teachers.split(", ").filter(teacher => teacher));

        this.timetables.forEach(timetable => {
            timetable.schedule.forEach(day => {
                day.forEach(cell => {
                    if (!cell.off) {
                        if (cell.room) roomsSet.add(cell.room);
                        if (cell.subject) subjectsSet.add(cell.subject);
                        if (cell.teacher) teachersSet.add(cell.teacher);
                    }
                });
            });
        });

        this.user.rooms = Array.from(roomsSet).join(", ");
        this.user.subjects = Array.from(subjectsSet).join(", ");
        this.user.teachers = Array.from(teachersSet).join(", ");
    }
}

class Person {
    constructor(isUser) {
        this.isUser = isUser;
        this.name = "";
        this.schoolName = "";
        this.schoolAddress = "";
        this.favoriteSubject = "";
        this.rooms = "";
        this.subjects = "";
        this.teachers = "";
    }
}

export class Timetable {
    constructor(isUser = false, className = "") {
        this.isUser = isUser;
        this.matesNames = "";
        this.className = className;
        this.dayStart = 0;
        this.timeStart = 0;
        this.schedule = Array.from({ length: 7 }, () =>
            Array.from({ length: 10 }, () => new Cell(true))
        );
    }
}

export class Cell {
    constructor(off) {
        this.off = off;
        this.room = off ? "N/A" : "";
        this.subject = off ? "N/A" : ""
        this.teacher = off ? "N/A" : ""
    }
}

class WidgetsSwitches {
    constructor() {
        this.matesTimetables = true
        this.upcomingEvents = true
        this.coffeeKey = true
        this.homework = true
        this.coffeeKeyBalance = 0;
        this.homeworkProgress = [0, 0];
        this.link1 = new CustomLink("School site")
        this.link2 = new CustomLink("Classroom")
    }
}

class CustomLink {
    constructor(label) {
        this.visible = true,
            this.label = label,
            this.url = "./"
    }
}

class Settings {
    constructor() {
        this.appLaunches = 0;
        this.darkMode = "system";
        this.palette = "Cornflower";
        this.hapticFeedback = false;
        this.language = "English";
        this.tab = "Home";
        this.version = null;
        this.boxLayout = ["Room", "Class name", "Mates names", "Subject", "Teacher"];
        this.widgets = new WidgetsSwitches()
    }
}

export default Data;
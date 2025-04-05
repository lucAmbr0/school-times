class Data {
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
}

class Person {
    constructor(isUser) {
        this.isUser = isUser;
        this.name = "";
        this.className = "";
        this.schoolName = "";
        this.schoolAddress = "";
        this.favoriteSubject = "";
        this.rooms = [];
        this.subjects = [];
        this.teachers = [];
    }
}

class Timetable {
    constructor(isUser = false, className = "") {
        this.isUser = isUser;
        this.matesNames = "";
        this.className = className;
        this.dayStart = 0;
        this.timeStart = 0;
        this.schedule = Array.from({ length: 7 }, () => 
            Array.from({ length: 24 }, () => new Cell())
        );
    }
}

export class Cell {
    constructor() {
        this.off = false;
        this.room = "";
        this.subject = "";
        this.teacher = "";
    }
}

class Settings {
    constructor() {
        this.darkMode = "system";
        this.palette = "Cornflower";
        this.hapticFeedback = false;
        this.language = "English";
        this.tab = "Home";
        this.version = null;
    }
}

export default Data;
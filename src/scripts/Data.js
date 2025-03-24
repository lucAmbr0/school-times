class Data {
    constructor() {
        this.user = new Person(true);
        this.mates = [];
        this.settings = new Settings();
    }
}

class Person {
    constructor(isUser) {
        this.isUser = isUser;
        this.name = "";
        this.className = "";
        this.timetable = new Timetable();
    }
}

class Timetable {
    constructor() {
        this.className = "";
        this.matesNames = "";
        this.dayStart = 0;
        this.timeStart = 0;
        this.schedule = Array.from({ length: 7 }, () => 
            Array.from({ length: 24 }, () => new Cell())
        );
    }
}

class Cell {
    constructor() {
        this.off = false;
        this.room = "";
        this.subject = "";
        this.teacher = "";
    }
}

class Settings {
    constructor() {
        this.darkMode = true;
        this.language = "eng";
    }
}
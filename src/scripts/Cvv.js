export class Cvv {

    static API_URL = 'http://37.187.249.154:43210/rest/v1';
    static API_KEY = import.meta.env.VITE_CVV_Z_DEV_API_KEY;
    static studentId = "";
    static sessionToken = "";

    static async getToken(username, password) {
        try {
            const response = await fetch(`${Cvv.API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'CVVS/std/4.1.7 Android/10',
                    'Z-Dev-Apikey': this.API_KEY,
                },
                body: JSON.stringify({
                    'uid': username,
                    'pass': password
                })
            });
            const data = await response.json();
            console.log('GET Response:', data);
            return data;
        } catch (error) {
            console.error('GET Error:', error);
            return data;
        }
    }

    static async getGrades() {
        try {
            const response = await fetch(`${Cvv.API_URL}/students/${this.studentId}/grades/?ffilter=grades(displayValue)`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'CVVS/std/4.1.7 Android/10',
                    'Z-Dev-Apikey': this.API_KEY,
                    'Z-Auth-Token': this.sessionToken
                },
            });
            const data = await response.json();
            console.log('GET Response:', data);
            return data;
        } catch (error) {
            console.error('GET Error:', error);
            return data;
        }
    }

    static async getAbsences() {
        try {
            // ABA0 = full (red) day absence
            const response = await fetch(`${Cvv.API_URL}/students/${this.studentId}/absences/details/?dfilter=events(evtCode=ABA0)`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'CVVS/std/4.1.7 Android/10',
                    'Z-Dev-Apikey': this.API_KEY,
                    'Z-Auth-Token': this.sessionToken
                },
            });
            const data = await response.json();
            console.log('GET Response:', data);
            return data;
        } catch (error) {
            console.error('GET Error:', error);
            return data;
        }
    }

    static async getDelays() {
        try {
            // ABR0 = delay (orange)
            const response = await fetch(`${Cvv.API_URL}/students/${this.studentId}/absences/details/?dfilter=events(evtCode=ABR0)`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'CVVS/std/4.1.7 Android/10',
                    'Z-Dev-Apikey': this.API_KEY,
                    'Z-Auth-Token': this.sessionToken
                },
            });
            const data = await response.json();
            console.log('GET Response:', data);
            return data;
        } catch (error) {
            console.error('GET Error:', error);
            return data;
        }
    }

    static async getDelays() {
        try {
            // NTNT: appunti
            // NTTE: note dell'insegnante
            // NTCL: note sul registro
            // NTWN: richiami
            // NTST: sanzioni disciplinari
            const response = await fetch(`${Cvv.API_URL}/students/${this.studentId}/notes/all/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'CVVS/std/4.1.7 Android/10',
                    'Z-Dev-Apikey': this.API_KEY,
                    'Z-Auth-Token': this.sessionToken
                },
            });
            const data = await response.json();
            console.log('GET Response:', data);
            return data;
        } catch (error) {
            console.error('GET Error:', error);
            return data;
        }
    }

    static async getStatus() {
        try {
            // HAT0: presente a lezione
            // HAT1: presente fuori aula
            // HAB0: assente a lezione
            // HNN0: ora senza lezione
            const response = await fetch(`${Cvv.API_URL}/students/${this.studentId}/lessons-status/today`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'CVVS/std/4.1.7 Android/10',
                    'Z-Dev-Apikey': this.API_KEY,
                    'Z-Auth-Token': this.sessionToken
                },
            });
            const data = await response.json();
            console.log('GET Response:', data);
            return data;
        } catch (error) {
            console.error('GET Error:', error);
            return data;
        }
    }
}
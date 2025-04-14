let lastTrack = 0;

export function umamiFullTrack(data) {
    const now = Date.now();
    if (now - lastTrack >= 10000 && (process.env.NODE_ENV === "production")) {
        console.log("FULL TRACK");
        lastTrack = now;
        umami.track("tab-render", {
            tabName: data.settings.tab,
            colorPalette: data.settings.palette,
            colorScheme: data.settings.darkMode,
            hapticFeedback: data.settings.hapticFeedback,
            language: data.settings.language,
            version: data.settings.version,
            timetablesAmount: data.timetables.length
        });
    }
}

export function umamiTrack(flag, desc) {
    const now = Date.now();
    if (now - lastTrack >= 10000 && (process.env.NODE_ENV === "production")) {
        console.log("SMALL TRACK");
        lastTrack = now;
        umami.track(flag, desc);
    }
}
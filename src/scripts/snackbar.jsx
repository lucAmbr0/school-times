import React from "react";
import { createRoot } from "react-dom/client";
import Snackbar from "../components/Snackbar/Snackbar";

export function showSnackbar(text, duration) {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = createRoot(container);
    const remove = () => {
        root.unmount();
        document.body.removeChild(container);
    };

    root.render(
        <Snackbar text={text} duration={duration} onClose={remove} />
    );
}
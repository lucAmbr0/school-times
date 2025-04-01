import { useData } from "./useData";

const useVibration = () => {
    const [data] = useData();
    const doVibrate = data.settings.hapticFeedback;
    return (duration) => {
        if ('vibrate' in navigator && doVibrate) {
            navigator.vibrate(duration);
        }
    };
};

export default useVibration;

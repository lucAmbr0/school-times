const useVibration = () => {
    return (duration) => {
        if ('vibrate' in navigator) {
            navigator.vibrate(duration);
        }
    };
};

export default useVibration;

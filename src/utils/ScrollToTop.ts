export const ScrollToTop = {
    instant: () => {
        return window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    },
    smooth: () => {
        return window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
};

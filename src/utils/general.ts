export const greeting = () => {
    const time = new Date().getHours();
    let greet = ''
    if (time < 12) {
        greet = "Good Morning"
    }
    else if (time >= 12 && time < 17) {
        greet = "Good Afternoon"
    }
    else {
        greet = "Good Evening"
    }
    return `${greet}, Welcome`
}
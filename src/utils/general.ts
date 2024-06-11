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

export const logout = () => {
    localStorage.removeItem('_Ey_');
    window.location.href = '/signin';
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('_Ey_');
    if (!token) return false;
    const decodedToken = JSON.parse(atob(token.split('.')[1]));

   
    const expiryTime = decodedToken.exp * 1000;
    
    return Date.now() < expiryTime;
};

// export const getToken = () => {
//     const token = localStorage.getItem('_Ey_');
//     if (token && !isTokenExpired(token)) {
//         return token;
//     }
//     localStorage.removeItem('_Ey_');
//     return null;
// };

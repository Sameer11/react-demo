

export const isLogin = () => {
    if (localStorage.getItem('user') !== null) {
        return true;
    }

    return false;
}

export const isAdmin = () => {
    if (localStorage.getItem('user') !== null) {
        let loggedUser = JSON.parse(localStorage.getItem('user'))
        let isAdmin = loggedUser.role !== 'ADMIN' ? true : false
        return isAdmin;
    }

    return false;
}
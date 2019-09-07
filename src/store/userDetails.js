import {decorate,observable, action} from 'mobx';

class UserDetails {
    currentComponent = 'toDo';
    isLoggedIn = false;

    setCurrentComponent(item) {
        this.currentComponent = item;
    }
    setIsLoggedIn(flag) {
        this.isLoggedIn = flag;
    }
}

decorate(UserDetails, {
    currentComponent: observable,
    isLoggedIn: observable,
    setCurrentComponent: action,
    setIsLoggedIn: action
});

const userDetails = new UserDetails();

export default userDetails;
import {decorate,observable, action} from 'mobx';

class UserDetails {
    currentComponent = 'toDo';

    setCurrentComponent(item) {
        this.currentComponent = item;
    }
}

decorate(UserDetails, {
    currentComponent: observable,
    setCurrentComponent: action
});

const userDetails = new UserDetails();

export default userDetails;
import * as base from './base';

export default class LoginService {
    static checkIfUserIsValid(userId, password) {
        return base.get(`getUser/${userId}/password/${password}`);
    }
}
import * as base from './base';

export default class UserService {
 
    static getUsers(branchCode) {
        return base.get(`getUsers/branchcode/${branchCode}`);
    }
}

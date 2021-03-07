import * as base from './base';

export default class ComplaintsService {
    static getComplaintsAssignedToUser(userId) {
        return base.get(`getListOfComplaints/${userId}`);
    }
}
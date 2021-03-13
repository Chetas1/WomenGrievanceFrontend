import * as base from './base';

export default class ComplaintsService {
    static getComplaintsAssignedToUser(userId) {
        return base.get(`getListOfComplaints/${userId}`);
    }

    static storeComplaintOfUser(complaint) {
        return base.post(`storeListOfComplaints`, complaint);
    }

    static getComplaintMessages(complaintId) {
        return base.get(`getComplaintMessages/${complaintId}`);
    }
}

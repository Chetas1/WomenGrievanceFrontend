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

    static getTimelines(complaintId) {
        return base.get(`getTimeliness/${complaintId}`);
    }

    static resolveComplaint(complaintId) {
        return base.get(`resolveComplaint/${complaintId}/resolvedBy/${localStorage.getItem('userId')}`);
    }

    static transferComplaint(complaintId,assignedTo) {
        return base.get(`transferComplaint/${complaintId}/assignedToEmail/${assignedTo}/transferFrom/${localStorage.getItem('userId')}`);
    }
}

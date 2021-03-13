import ComplaintsService from '../service/ComplaintsService';

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const userInput = message.toLowerCase();

      if(userInput.includes("hello")){
          this.actionProvider.greet();
      }
      else if(userInput.includes("@")){
        localStorage.setItem('registeredBy',userInput);
        this.actionProvider.askForYearofAddmission();
      }
      else if(this.state.messages.some(item => "Do you want to register your complaint?" === item.message)) {
        var complaint = {
          Complaint : this.state.messages,
          RegisteredBy : localStorage.getItem('registeredBy'),
          Status : 'Active',
          Branch : localStorage.getItem('branchCode')
        };
        ComplaintsService.storeComplaintOfUser(complaint).then(response => {
          if(response.status === 200) { 
          }
        })
      }
      else if(this.state.messages.some(item => "Who witnessed it?" === item.message)) {
        this.actionProvider.thanksForSubmitingInfo();
      }
      else if(this.state.messages.some(item => "Where and when it happened?" === item.message)) {
        this.actionProvider.askForWhoWitnessedIt();
      }
      else if(this.state.messages.some(item => "Please tell use more about incident" === item.message)) {
        this.actionProvider.askForWhenAndWhereItHappend();
      }
      else if(this.state.messages.some(item => "Registering complain for Harrasment" === item.message || "Registering complain for Sexual Voilance" === item.message)) {
        localStorage.setItem('branchCode',userInput);
        this.actionProvider.askForHarassementDetails();
      } 
    }
  }
  
  export default MessageParser;
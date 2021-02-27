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
        this.actionProvider.askForYearofAddmission();
      }
      else if(this.state.messages.some(item => "Thanks for submitting information we have registered your complaint" === item.message)) {
        // Call API to store the data in db
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
        this.actionProvider.askForHarassementDetails();
      } 
    }
  }
  
  export default MessageParser;
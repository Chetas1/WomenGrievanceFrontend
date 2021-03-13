class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello friend.");
      this.addMessageToState(message);
    };

    askForYearofAddmission = () => {
      const message = this.createChatBotMessage("Please tell you branch code");
      this.addMessageToState(message);
    };
  
    getUserDetailsForSexualVoilance = () => {
      let message = this.createChatBotMessage( "Registering complain for Sexual Voilance" );
      this.addMessageToState(message);
      message = this.createChatBotMessage( "Please tell your email Id" );
      this.addMessageToState(message);
    };

    getUserDetailsForHarrasment = () => {
      let message = this.createChatBotMessage("Registering complain for Harrasment" );
      this.addMessageToState(message);
      message = this.createChatBotMessage( "Please tell your email Id" );
      this.addMessageToState(message);
    };
    
    askForHarassementDetails = () => {
      const message = this.createChatBotMessage("Please tell use more about incident");
      this.addMessageToState(message);
    };

    askForWhenAndWhereItHappend = () => {
      const message = this.createChatBotMessage("Where and when it happened?");
      this.addMessageToState(message);
    };

    askForWhoWitnessedIt = () => {
      const message = this.createChatBotMessage("Who witnessed it?");
      this.addMessageToState(message);
    };

    thanksForSubmitingInfo= () => {
      const message = this.createChatBotMessage("Do you want to register your complaint?");
      this.addMessageToState(message);
    }
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
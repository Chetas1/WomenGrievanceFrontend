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
    }
  }
  
  export default MessageParser;
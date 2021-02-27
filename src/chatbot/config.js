import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. Welcome to Women Grievance!`),
    createChatBotMessage(`Violation against women/girls is a human right violation`),
    createChatBotMessage(`What kind of violance do you need help with`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    }
  ],
};

export default config;
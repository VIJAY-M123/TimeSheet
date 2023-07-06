import React from "react";
import { Segment } from "semantic-ui-react";
import ChatBot from "react-simple-chatbot";
import "../Style/Chat.css";

export default function Chat(){
    return(
        <div>
              <Segment floated="right">
                <ChatBot steps={[
                    {
                        id: 'intro',
                        message: 'Hello. What is your name?',
                        trigger: 'intro-user',
                    },
                    {
                        id: 'intro-user',
                        user: true,
                        end: true,
                    },
                ]} />
            </Segment>
        </div>
    );
}
/**
 * Created by nikolaynikiforov on 20/06/2017.
 */
import React from 'react';

const Conversation = ({messages}) => (
    <div className="Conversation">
        {messages.map((message, i) =>
            <Reply key={i} {...message} />
        )}
    </div>
)

const Reply = ({isLeft, text}) =>

    <div className={isLeft ? "lbubble" : "rbubble"}>{text}</div>





export default Conversation;
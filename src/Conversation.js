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
    isLeft ?
        <div className="outer">
            <div className="lbubble">{text}</div>
        </div>
        :
        <div className="outer">
            <div className="rbubble">{text}</div>
        </div>





export default Conversation;
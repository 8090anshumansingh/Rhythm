import React from 'react';
import "../../styles/message.css";

function Message({own}) {
    return (
        <div className={own? "message own":"message"}>
            <div className='messageTop'>
                <img 
                   className='messageImg'
                    alt="msg"
                    src="data:image/jpeg;base64,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"
                />
                <p className='messageText'>Hello this is a msg</p>
                
            </div>
            <div className='messageBottom'>1 hour ago</div>
        </div>
    );
}

export default Message;
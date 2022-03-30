import React from 'react';
import "../../styles/chatOnline.css";

function ChatOnline(props) {
    return (
        <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnuk3skjvNsY3byTTqUrVZGIzH1PTtebGbQ&usqp=CAU"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Taylor Swift</span>
        </div>
      
    </div>
    );
}

export default ChatOnline;
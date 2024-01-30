import React, { useState, useEffect, useRef } from 'react';
import './newmessageBtn.scss';
import { IoClose } from 'react-icons/io5';

export default function NewmessageBtn() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isMessageOpen && inputRef.current) {
      // Focus on the input element when the box opens
      inputRef.current.focus();
      setIsInputActive(true);
    }
  }, [isMessageOpen]);

  const handleNewMessageClick = () => {
    setIsMessageOpen((prevIsMessageOpen) => !prevIsMessageOpen);
  };

  const handleCloseMessageClick = () => {
    setIsMessageOpen(false);
  };

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };

  return (
    <div className="newChatWrapper">
      <div className="newMessageBtn">
        <div className="positionRelne">
          <div className="newMessageIcon" onClick={handleNewMessageClick}>
            <i
              style={{
                backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/x5WKSXIdYuX.png)',
                backgroundPosition: '0px -390px',
                backgroundSize: 'auto',
                width: '20px',
                height: '20px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
              }}
            ></i>
          </div>
          <span style={{ color: '#dbdada' }}>New Message</span>
        </div>
      </div>
      {isMessageOpen && (
        <div className={`newMessageBox ${isInputActive ? 'active' : ''}`}>
          <div className="newMsgTitle">
            <h4>New message</h4>
            <div className={`closebtn ${isInputActive ? 'active' : ''}`} onClick={handleCloseMessageClick}>
              <i>
                <IoClose />
              </i>
              <span>Close tab</span>
            </div>
          </div>
          <div className="newInput">
            <p>To:</p>
            <input type="text" ref={inputRef} onFocus={handleInputFocus} onBlur={handleInputBlur} />
          </div>
          <div className="divider"></div>
          <div className="searchedSuggestions"></div>
        </div>
      )}
    </div>
  );
}

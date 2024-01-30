import React, { useState } from 'react';
import './righthomesidebar.scss';
import { MdOutlineSearch } from 'react-icons/md';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
// Import images from the correct path
import { FiPlus } from 'react-icons/fi';
import { friend, groupData } from '../../../my Data/friend';
import Chatbox from '../../chatbox/chatbox';

const RightHomeSidebar = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);

  const openChatbox = (friendId) => {
    setSelectedFriend(friendId);
  };

  const closeChatbox = () => {
    setSelectedFriend(null);
  };

  return (
    <div className="rightHomeWrapper">
      <div className="positionrightHome">
        <div className="sidebarnotification">
          <p>Birthdays</p>
          <ul>
            <li>
              <i
                style={{
                  height: '36px',
                  width: '36px',
                  backgroundImage:
                    'url(https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/PzyAtXOPzNu.png)',
                  backgroundPosition: '0px 0px',
                  backgroundSize: 'auto',
                  backgroundRepeat: 'no-repeat',
                  display: 'inline-block',
                }}
              ></i>
              <span>
                <strong>Bi Ki</strong> and <strong>2 others </strong>
                have birthdays today.
              </span>
            </li>
          </ul>
        </div>
        <div className="onlineFriendslist">
          <div className="onlineHead">
            <p>Contacts</p>
            <div className="searchIcon">
              <MdOutlineSearch />
              <HiOutlineDotsHorizontal />
            </div>
          </div>
          <div className="friendList">
            <ul>
              {friend.map(({ id, name, onlineSmallImage }) => (
                <li key={id} onClick={() => openChatbox(id)}>
                  <div className="friendsmallimage">
                    <img src={onlineSmallImage} alt="" />
                  </div>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="groupChats">
          <p>Group conversations</p>
          <div className="groupList">
            <ul>
              {groupData.map(({ id, groupImage, groupName }) => (
                <li key={id}>
                  <div className="groupsmallimage">
                    <img src={groupImage} alt="" />
                  </div>
                  {groupName}
                </li>
              ))}
              <li className="newgroup">
                <i>
                  <FiPlus />
                </i>
                Create new group
              </li>
            </ul>
          </div>
        </div>
        {selectedFriend !== null && (
          <Chatbox
            friend={friend[selectedFriend - 1]}
            closeChatbox={closeChatbox}
          />
        )}
      </div>
    </div>
  );
};

export default RightHomeSidebar;

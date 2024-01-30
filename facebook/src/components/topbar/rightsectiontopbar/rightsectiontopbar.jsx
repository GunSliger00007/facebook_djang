
import React, { useEffect, useRef, useState } from "react";
import './rightsectiontopbar.scss'
import UserSmallImage from "../../../asssets/user small image.jpg";
import { MdOutlineSearch } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { friend, groupData } from "../../../my Data/friend";
import notificationsData from "../../../my Data/notification";
import { PiCaretRight } from "react-icons/pi";
import Chatbox from "../../chatbox/chatbox";
import { FiPlus } from "react-icons/fi";

export default function Rightsectiontopbar({handleLogout}) {
    const [activeIndex, setActiveIndex] = useState(null);
  const wrapperRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("inbox");
  const [selectedNotificationTab, setSelectedNotificationTab] = useState("all");
  const combinedData = [...friend, ...groupData];
    const handleOnClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setActiveIndex(null); // Remove active class when clicking outside
          }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);
      const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
      };
      const handleNotificationTabClick = (tabName) => {
        setSelectedNotificationTab(tabName);
      };
  const categories = [
    {
      title: "Social",
      topics: [
        {
          title: "Events",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/qfMB40PdgWb.png",
          description:
            "Organize or find events and other things to do online and nearby.",
        },
        {
          title: "Friends",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/i0pziEs5Wj6.png",
          description: "Search for friends or people you may know.",
        },
        {
          title: "Groups",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/MhkwI3R0SHP.png",
          description: "Connect with people who share your interests.",
        },
        {
          title: "News Feed",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-6zDH4i8Hrw.png",
          description: "See relevant posts from people and Pages you follow.",
        },
        {
          title: "Feeds",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png",
          description:
            "See the most recent posts from your friends, groups, Pages and more.",
        },
        {
          title: "Pages",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/7RdHDScIkAe.png",
          description: "Discover and connect with businesses on Facebook.",
        },
      ],
    },
    {
      title: "Entertainment",
      topics: [
        {
          title: "Gaming Video",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png",
          description:
            "Watch and connect with your favorite games and streamers.",
        },
        {
          title: "Play games",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/JzYamtSussX.png",
          description: "Play your favorite games.",
        },
        {
          title: "Video",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/XNFKm5WC2yS.png",
          description:
            "A video destination personalized to your interests and connections.",
        },
      ],
    },
    {
      title: "Shopping",
      topics: [
        {
          title: "Orders and payments",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png",
          description:
            "A seamless, secure way to pay on the apps you already use.",
        },
        {
          title: "Marketplace",
          iconUrl:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/G_tsqBLQpdP.png",
          description: "Buy and sell in your community.",
        },
      ],
    },
  ];
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const openChatbox = (friendId) => {
    setSelectedFriend(friendId);
    setIsChatboxOpen(true);
  };

  const closeChatbox = () => {
    setSelectedFriend(null);
    setIsChatboxOpen(false);
  };
    
  return (
    <div className="rightSectionTopbar" ref={wrapperRef}>
    <ul className="rightSectionulDivider">
    <li
        className={`createIcon ${activeIndex === 1 ? "active" : ""}` }
      >
        <i>
        <FiPlus />
        </i>
        <span style={{color:'#dbdada'}}>Create</span>
      </li>
      <li
        onClick={() => handleOnClick(1)}
        className={`menuIcon ${activeIndex === 1 ? "active" : ""}` }
      >
        <i>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
          </svg>
        </i>
        <span style={{color:'#dbdada'}}>Menu</span>
      </li>
      <li
        onClick={() => handleOnClick(2)}
        className={activeIndex === 2 ? "active" : ""}
      >
        <i>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path>
          </svg>
        </i>
        <span style={{color:'#dbdada'}}>Messenger</span>

      </li>
      <li
        onClick={() => handleOnClick(3)}
        className={activeIndex === 3 ? "active" : ""}
      >
        <i>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
          </svg>
        </i>
        <span style={{color:'#dbdada'}}>Notification</span>

      </li>
      <li
        onClick={() => handleOnClick(4)}
        className={activeIndex === 4 ? "active" : ""}
      >
        <i>
          <img
            src={UserSmallImage} alt=""
            style={{ borderRadius: "50%", border: "1px solid #cacaca" }}
          />
        </i>
        <span style={{color:'#dbdada'}}>Account</span>

      </li>
    </ul>
    <div
      className={`menuWrapper menuWrapper1 ${
        activeIndex === 1 ? "active" : ""
      }`}
      style={{ display: activeIndex === 1 ? "block" : "none" }}
    >
      <h1>Menu</h1>
      <div className="menusidebarWrapper">
        <div className="leftmenusidebar">
          <div className="searchInput">
            <i>
              <MdOutlineSearch />
            </i>
            <input type="text" placeholder="Search menu" />
          </div>
          {categories.map((category, index) => (
            <div key={index}>
              <h4>{category.title}</h4>
              <div className="menuLinks">
                <ul>
                  {category.topics.map((topic, idx) => (
                    <li className="menuBarLi" key={idx}>
                      <div className="linksFlex">
                        <div className="menuIcon">
                          <img src={topic.iconUrl} alt="" />
                        </div>
                        <div className="menuHead">
                          <h5>{topic.title}</h5>
                          <p>{topic.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="rightmenusidebar">
          <div className="createLinks">
            <h5>Create</h5>
            <ul>
              <li className="createLi">
                <span>
                  <i
                    style={{
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/lZiCZlXImy7.png)",
                      backgroundPosition: "0px -155px",
                      backgroundSize: "auto",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </span>
                Post
              </li>
              <li className="createLi">
                <span>
                  <i
                    style={{
                      backgroundImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/lZiCZlXImy7.png)",
                      backgroundPosition: "0px -155px",
                      backgroundSize: "auto",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </span>
                Post
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className={`messengerWrapper ${activeIndex === 2 && !isChatboxOpen ? "active" : ""}`}
        style={{ display: activeIndex === 2 && !isChatboxOpen ? "block" : "none" }}
    >
      <div className="messengerPosition">
        <div className="messengerHead">
          <h1>Chats</h1>
          <div className="messengerHeadIcons">
            <div className="messengerIcon">
              <HiOutlineDotsHorizontal />
            </div>
            <div className="messengerIcon">
              <i
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/s5T0Aqms1gw.png)",
                  backgroundPosition: "0px -328px",
                  backgroundSize: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
            </div>
            <div className="messengerIcon">
              <i
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/s5T0Aqms1gw.png)",
                  backgroundPosition: "0px -387px",
                  backgroundSize: "auto",
                  width: "16px",
                  height: "16px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="searchInput">
          <i>
            <MdOutlineSearch />
          </i>
          <input type="text" placeholder="Search menu" />
        </div>
        <div className="chatsLink">
          <ul>
            <li
              className={selectedTab === "inbox" ? "active" : ""}
              onClick={() => handleTabClick("inbox")}
            >
              Inbox
            </li>
            <li
              className={selectedTab === "communities" ? "active" : ""}
              onClick={() => handleTabClick("communities")}
            >
              Communities
            </li>
          </ul>

          {selectedTab === "inbox" && (
            <div className="inboxDiv">
              <ul>
                {combinedData.map((data) => (
                  <li key={data.id} onClick={() => openChatbox(data.id)}>
                    <div className="chats">
                      <div className="smallimageThumbnail">
                        <img
                          src={data.onlineSmallImage || data.groupImage}
                          alt=""
                        />
                      </div>
                      <div className="chatHead">
                        <h5>{data.name || data.groupName}</h5>
                        <p>
                          {data.message} . {data.messageTime}
                        </p>
                      </div>
                      <div className="bellIcon"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedTab === "communities" && (
            <div className="communitiesDiv">this is communities</div>
          )}
        </div>
      </div>
      <div className="messengerBtn">
        <p>See all in Messenger</p>
      </div>
    </div>
    <div className={`notificationWrapper ${
        activeIndex === 3 ? "active" : ""
      }`}
      style={{ display: activeIndex === 3 ? "block" : "none" }}
    >
      <div className="notificationHead">
        <h1>Notifications</h1>
        <div className="notificationIcon">
          <HiOutlineDotsHorizontal />
        </div>
      </div>
      <div className="notificationLink">
<ul>
  <li
    className={selectedNotificationTab === "all" ? "active" : ""}
    onClick={() => handleNotificationTabClick("all")}
  >
    All
  </li>
  <li
    className={selectedNotificationTab === "unread" ? "active" : ""}
    onClick={() => handleNotificationTabClick("unread")}
  >
    Unread
  </li>
</ul>

{selectedNotificationTab === "all" && (
  <div className="allDiv">
    <div className="allHead">
      <p>Earlier</p>
      <span>See all</span>
    </div>
    <div className="notificationList">
<ul>
  {notificationsData.map(notification => (
    <li key={notification.id} className="liforNot">
      <div className="notificationThumb">
      <img src={notification.notificationThumb} alt="" />
      <i style={notification.iconStyle}></i>
      </div>
      <div className="notdetailWrapper">
        <div className="notificationDetail">
          <p>
            <span>{notification.name}</span> {notification.action} <span>{notification.entity}</span>.
          </p>
          <div className="notificationTime">
            <span>{notification.time}</span>
          </div>
        </div>
        <div className="notDot"></div>
      </div>
      <div className="notificationMenuIcon">
        {/* Your menu icon */}
      </div>
    </li>
  ))}
</ul>
</div>
  </div>
)}

{selectedNotificationTab === "unread" && (
  <div className="unreadDiv">
    {/* Content for Unread */}
    Unread content here...
  </div>
)}
</div>

    </div>
    <div className={`profileInNavWrapper menuWrapper4 ${
        activeIndex === 4 ? "active" : ""
      }`}
      style={{
        display: activeIndex === 4 ? "block" : "none",
      }}>
      <div className="logoutSettingWrapper">
        <div className="profileSee">
          <div className="userDetail">
            <li><img src={UserSmallImage} alt="" />
            <h5>Ani Sh</h5></li>
            <div className="underline"></div>
            <li className="seeProfileBtn">See all profiles</li>
          </div>
        
        </div>
        <div className="settingLinks">
            <ul>
              <li>
                <div className="settingWrapper">
                  <div className="setName">
                    <div className="setIcon">
                    <i style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/6qN-FgPUo8z.png)',
                    backgroundPosition: '0px -511px',
                    backgroundSize: 'auto',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block',}}></i>
                    </div>
                    
                    <p>Settings & privacy</p>
                  </div>
                  <PiCaretRight />
                </div>
              </li>
              <li>
                <div className="settingWrapper">
                  <div className="setName">
                    <div className="setIcon">
                    <i style={{ backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/vZx3HqQM23H.png)',
                  backgroundPosition: '0px -193px',
                  backgroundSize: 'auto',
                  width: '20px',
                  height: '20px',
                  backgroundRepeat: 'no-repeat',
                  display: 'inline-block',}}></i>
                    </div>
                    
                    <p>Help & support</p>
                  </div>
                  <PiCaretRight />
                </div>
              </li>
              <li>
                <div className="settingWrapper">
                  <div className="setName">
                    <div className="setIcon">
                    <i style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/_H7WL3sJA88.png)',
                    backgroundPosition: '0px -197px',
                    backgroundSize: 'auto',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block',}}></i>
                    </div>
                    
                    <p>Display & accessibility</p>
                  </div>
                  <PiCaretRight />
                </div>
              </li>
              <li>
                <div className="settingWrapper">
                  <div className="setName">
                    <div className="setIcon">
                    <i style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/vZx3HqQM23H.png)',
                    backgroundPosition: '0px -67px',
                    backgroundSize: 'auto',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block',}}></i>
                    </div>
                    
                    <p>Give feedback</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="settingWrapper">
                  <div className="setName">
                    <div className="setIcon">
                    <i style={{backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/x5WKSXIdYuX.png)',
                    backgroundPosition: '0px -558px',
                    backgroundSize: 'auto',
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block',}}></i>
                    </div>
                    <div className="logOutBtn">
                    <button>Logout</button>
                    </div>   
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="footerLinks">
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Advertising</li>
              <li>Ad Choices</li>
              <li>Cookies</li>
              <li>More</li>
              <li>Meta © 2023</li>
            </ul>
          </div>
      </div>
    </div>
    {selectedFriend !== null && (
          <Chatbox
            friend={friend[selectedFriend - 1]}
            closeChatbox={closeChatbox}
          />
        )}
  </div>
  
  )
}

import React, { useState } from "react";
import "./stories.scss";
import CreateStoryUserImage from "../../../../asssets/createStoryUserImage.jpg";
import { FaPlus } from "react-icons/fa6";
import storiesData from "../../../../my Data/stories";
import reelsData from "../../../../my Data/reels";
import { IoPlay } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
export default function Stories() {
  const [activeItem, setActiveItem] = useState(0); // Initially set to 0
  const [storiesState] = useState(storiesData);
  const [reelsState] = useState(reelsData);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <div className="buttonCustom">
        <GoChevronRight />
        </div>
        
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
                <div className="buttonCustom">
                <GoChevronLeft />
        </div>
      </div>
    );
  };
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 3,
            }
        },
        {
          breakpoint: 360,
          settings: {
              slidesToShow: 3,
          }
      },
      {
        breakpoint: 260,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
};

  return (
    <div className="storiesWrapper">
      <div className="storiesLink">
        <ul>
          <li
            className={activeItem === 0 ? "active" : ""}
            onClick={() => handleItemClick(0)}
          >
            <div className="storiesinnerLinks">
              <svg
                viewBox="0 0 20 20"
                width="20"
                height="20"
                fill="currentColor"
                className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
              >
                <g fillRule="evenodd" transform="translate(-446 -350)">
                  <path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path>
                </g>
              </svg>
              <span>Stories</span>
            </div>
          </li>
          <li
            className={activeItem === 1 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            <div className="storiesinnerLinks">
              <svg
                viewBox="0 0 20 20"
                width="20"
                height="20"
                fill="currentColor"
                className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
              >
                <g fillRule="evenodd" transform="translate(-446 -350)">
                  <path d="M454.59 355h4.18l-2.4-4h-3.28c-.22 0-.423.008-.624.017L454.59 355zm6.514 0h3.695c-.226-1.031-.65-1.79-1.326-2.489-1.061-1.025-2.248-1.488-4.392-1.511h-.379l2.401 4zm-8.78 0-1.942-3.64c-.73.247-1.315.63-1.868 1.165-.668.69-1.09 1.445-1.315 2.475h5.125zm7.043 7.989a.711.711 0 0 1-.22.202l-4.573 2.671-.05.027a.713.713 0 0 1-1.024-.643v-5.343l.002-.056a.714.714 0 0 1 1.072-.56l4.572 2.67.054.036a.714.714 0 0 1 .167.996zm-12.366-5.99V363.083l.001.03v.112l.005.048h.001c.05 2.02.513 3.176 1.506 4.203 1.102 1.066 2.324 1.525 4.577 1.525h5.99c2.144-.023 3.331-.486 4.392-1.511 1.005-1.04 1.467-2.198 1.517-4.217h.003c.003-.1.005-.1.006-.204l.001-.156V357h-18z"></path>
                </g>
              </svg>
              <span>Reels</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="storiesContents"
        style={{ display: activeItem === 0 ? "block" : "none" }}>
        <ul>
        <Slider {...settings}>
          <li>
            <div className="Createstory">
              <div className="userImage">
                <img src={CreateStoryUserImage} alt="" width={"100%"} />
                <div className="plusIcon">
                  <FaPlus />
                </div>
              </div>
              <p>Create Story</p>
            </div>
          </li>
          {storiesState.map((stories, index) => {
            const { Name, storythumbnail, storycreatersmallimage } = stories;
            return (
              <li key={index}>
                <div className="storiesCreater">
                  <img src={storythumbnail} alt="" height={"100%"} />
                  <div className="createrSmallImage">
                    <img
                      src={storycreatersmallimage}
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h6>{Name}</h6>
                </div>
              </li>
            );
          })}
        </Slider>
        </ul>
      </div>
      <div
        className="reelsContents"
        style={{ display: activeItem === 1 ? "block" : "none" }}>
        <ul>
        <Slider {...settings}>
          <li>
            <div className="createReels">
              <div
                className="createReelIconWrapper">
                <div className="reelIcon" style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/yjJFVz39oV-.png)",
                  backgroundPosition: "0px 0px",
                  backgroundSize: "auto",
                  width: "36px",
                  height: "36px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}></div>
                <div className="plusIcon">
                  <FaPlus />
                </div>
              </div>
            </div>
            <p>Create reel</p>
          </li>
          {reelsState.map((reels, index) => {
            const {Thumbnail, views} = reels;
            return(
                <li  key={index}>
                <div className="reelsWrapper">
                    <img src= {Thumbnail} alt="" width={'100%'} height={'100%'} />
                    <div className="views">
                    <p> <IoPlay /> {views}</p>
                    </div>
                </div>
              </li>
            )
          })}
         </Slider>
        </ul>
      </div>
    </div>
  );
}
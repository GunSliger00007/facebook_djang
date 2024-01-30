import React from "react";
import "./posts.scss";
import { IoMdGlobe } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import LikeIcon from "../../../../asssets/likesicon/likeIcon.svg";
import LoveIcon from "../../../../asssets/likesicon/loveIcon.svg";
import mainUserSmallimage from "../../../../asssets/user small image.jpg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Post from "../../../../my Data/post";
import LikeBtn from "../../../likebtn/likeBtn";
export default function posts({data = Post, customStyles ={}, showUploadedText=true, 
  uploadedGroupName= false, uploaderNameGroup=false }) {
  return (
    <>
      {data.map(
        ({
          id,
          username,
          Image,
          caption,
          userSmallimage,
          liker1,
          liker2,
          totalLike,
          commentatorSmallimage,
          commentatorName,
          comment,
          totalComment,
          taggedPerson,
          taggedNumber,
          uploadedTime,
          Profilepicture,
          Coverphoto,
          commentedTime,
          uploadedGroup,
          groupUploader
        }) => (
          <div className="postWrapper" key={id} style={customStyles.postWrapper }>
            {taggedPerson ? (
              <div className="postHead">
                <p>
                  <strong>{taggedPerson}</strong> was tagged.
                </p>
              </div>
            ) : null}
            <div className="userDetailWrapper">
              <div className="userDetail">
                <div className="userImage">
                  <img src={userSmallimage} alt="" />
                </div>
                <div className="userName">
                  {taggedPerson && taggedNumber ? (
                    <p>
                      <strong>{username}</strong> is with{" "}
                      <strong>{taggedPerson}</strong> and{" "}
                      <strong>{taggedNumber} others</strong>.
                    </p>
                  ) : (
                    <p>
                      <strong>{username}</strong> 
                      {showUploadedText && <span> uploaded a picture.</span>}
                      {uploadedGroupName && <strong> - {uploadedGroup}</strong>}
                    </p>
                  )}
                  <div className="timeUploaderWrapper">
                    {uploaderNameGroup && <strong className="groupUploader">{groupUploader}</strong>}
                  <span className="timeSpan">
                    {uploadedTime}
                    <div className="svgGlobe">
                      <IoMdGlobe />
                    </div>
                  </span>
                  </div>
                </div>
              </div>
              <div className="menuIcon">
                <BsThreeDots />
              </div>
            </div>
            <div className="postCaption">
              <p>{caption}</p>
            </div>
            <div className="postImage" style={customStyles.postImage}>
              {Profilepicture ? (
                <div className="profilePicture" >
                  <img src={Coverphoto} alt="" />
                  <img src={Profilepicture} alt="Profile" />
                </div>
              ) : (
                <ul className="imageCentered" style={customStyles.imageCentered}>
                  <li className="alternateImage" style={customStyles.alternateImage}>
                    <img src={Image} alt="" />
                  </li>
                </ul>
              )}
            </div>
            <div className="likeCommentWrapper">
              <div className="likeWrapper">
                <div className="likes">
                  <div className="likecounts">
                    <div className="likeNumbers">
                      <div className="likeIcons">
                        <img src={LikeIcon} width={"18px"} alt="" />
                        <img src={LoveIcon} width={"18px"} alt="" />
                      </div>
                      {liker1 ? (
                           <p>
                           {liker1}, {liker2} and {totalLike} others
                         </p>
                      ) : ( <p>{totalLike} </p>)}
                    </div>
                    <div className="commentNumbers">
                      <p>{totalComment}</p>
                      <i
                        style={{
                          backgroundImage:
                            "url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)",
                          backgroundPosition: "0px -1304px",
                          backgroundSize: "auto",
                          width: "16px",
                          height: "16px",
                          backgroundRepeat: "no-repeat",
                          display: "inline-block",
                        }}
                      ></i>
                    </div>
                  </div>
                  <div className="likeCommentBtn">
                    <ul className="ulForLike">
                      <li className="liForLIke">
                        <LikeBtn />
                      </li>
                      <li className="liForLIke">
                        <i
                          style={{
                            backgroundImage:
                              "url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)",
                            backgroundPosition: "0px -504px",
                            backgroundSize: "auto",
                            width: "20px",
                            height: "20px",
                            backgroundRepeat: "no-repeat",
                            display: "inline-block",
                            filter:
                              "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
                          }}
                        ></i>
                        Comment
                      </li>
                      <li className="liForLIke">
                        <i
                          style={{
                            backgroundImage:
                              "url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)",
                            backgroundPosition: "0px -840px",
                            backgroundSize: "auto",
                            width: "20px",
                            height: "20px",
                            backgroundRepeat: "no-repeat",
                            display: "inline-block",
                            filter:
                              "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
                          }}
                        ></i>
                        Share
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
                  <div className="commentWrapper">
                    {comment ? (
                       <div className="comments">
                       <div className="viewMoreComment">
                         <p>View more comments</p>
                       </div>
                         <div className="comment1">
                           <i>
                             <HiOutlineDotsHorizontal />
                           </i>
                           <img src={commentatorSmallimage} alt="" />
                           <div className="commentDetails">
                             <div className="commentatorComment">
                               <h6 className="commentatorName">{commentatorName}</h6>
                               <div className="comment">
                                 <p>{comment}</p>
                               </div>
                             </div>
                             <div className="timeLikeReply">
                               <ul className="replyAndLikeUl">
                                 <li className="commentLi1">
                                   <span>{commentedTime}</span>
                                 </li>
                                 <li className="commentLi2">
                                   <LikeBtn />
                                 </li>
                                 <li className="commentLi3">
                                   <p>Reply</p>
                                 </li>
                                 <li className="commentLi4">
                                   <p>See translation</p>
                                 </li>
                               </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                    ) : null}
                 
                  <div className="writeCommentInput">
                    <div className="userSmallImage">
                      <img src={mainUserSmallimage} alt="" />
                      <i>
                        <IoIosArrowDown />
                      </i>
                    </div>
                    <div className="commentInput">
                      <input type="text" placeholder="Write a comment..." />
                      <div className="emojiGifWrapper">
                        <ul>
                          <li>
                            <i
                              style={{
                                backgroundImage:
                                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)",
                                backgroundPosition: "0px -1032px",
                                backgroundSize: "auto",
                                width: "16px",
                                height: "16px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              style={{
                                backgroundImage:
                                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)",
                                backgroundPosition: "0px -1134px",
                                backgroundSize: "auto",
                                width: "16px",
                                height: "16px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              style={{
                                backgroundImage:
                                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)",
                                backgroundPosition: "0px -1066px",
                                backgroundSize: "auto",
                                width: "16px",
                                height: "16px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              style={{
                                backgroundImage:
                                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)",
                                backgroundPosition: "0px -1168px",
                                backgroundSize: "auto",
                                width: "16px",
                                height: "16px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              style={{
                                backgroundImage:
                                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/qpOHhV6EQFx.png)",
                                backgroundPosition: "0px -1253px",
                                backgroundSize: "auto",
                                width: "16px",
                                height: "16px",
                                backgroundRepeat: "no-repeat",
                                display: "inline-block",
                              }}
                            ></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
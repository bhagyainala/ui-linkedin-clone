import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faSquare,
  faEarth,
  faHeart,
  faLightbulb,
  faThumbsUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { NAVBAR_ICONS, Posts_Data, WHO_TO_CONNECT } from "../../Data/data";
export const Home = () => {
  return (
    <>
      <div className="main">
        <div className="homeContainer">
          <div className="leftSide">
            <div className="profileDiv">
              <div className="backGroundDiv">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5616AQHrpEBEcqqr-A/profile-displaybackgroundimage-shrink_350_1400/0/1643298120330?e=1663804800&v=beta&t=ntWZkQ9f0apGiu0yHkg69Gw3qlg_k9OH4u7Ju9119GI"
                  className="bgImg"
                  alt=""
                />
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQGDn2fqDlEoaw/profile-displayphoto-shrink_400_400/0/1701436178274?e=1710979200&v=beta&t=UJx0jm4b4mNP3X8rblzBSYjitqAKkBmm9DVZldP9bi8"
                  alt=""
                  className="avatarImg"
                />
                <h4 className="avatarName">Bhagyalakshmi Inala</h4>
                <p className="avatarAbout">
             JavaScript | Reactjs | Redux | Nodejs | SQL | Software Development
                </p>
                <div className="hr"></div>
                <div className="viewes">
                  <h3>Who's viewed your profile </h3>
                  <h4>400</h4>
                </div>
                <div className="viewes">
                  <h3>Views of your video </h3>
                  <h4>850</h4>
                </div>
                <div className="hr"></div>
                <div className="premium">
                  <p>Access exclusive tools & insights</p>
                  <h4>
                    <FontAwesomeIcon className="squire" icon={faSquare} /> Try
                    Premium for free
                  </h4>
                </div>
                <div className="hr"></div>
                <div className="items">
                  <h4>
                    <FontAwesomeIcon className="bookmark" icon={faBookmark} />
                    My items
                  </h4>
                </div>
              </div>
            </div>
            <div className="groups">
              <h4 className="h4Color">Groups</h4>
              <div className="events">
                <h4 className="h4Color">Events</h4>
                <h5>+</h5>
              </div>
              <h4 className="h4Color">Followed Hashtags</h4>
              <div className="hr"></div>
              <h4 className="discover">Discover more</h4>
            </div>
          </div>
          <div className="middleSide">
            <div className="top">
              <div className="searchDiv">
                <img src="https://media.licdn.com/dms/image/D4E03AQGDn2fqDlEoaw/profile-displayphoto-shrink_400_400/0/1701436178274?e=1710979200&v=beta&t=UJx0jm4b4mNP3X8rblzBSYjitqAKkBmm9DVZldP9bi8" alt="image" />
                <input
                  className="postInput"
                  type="text"
                  placeholder="Start a post"
                  disabled
                />
              </div>

              <div className="buttons">
                {NAVBAR_ICONS.map((el, i) => (
                  <NavbarIcons key={i} icon={el.icon} text={el.text} />
                ))}
              </div>
            </div>
            {Posts_Data.map((el, i) => (
              <UserPosts
                key={i}
                avatar={el.avatar}
                name={el.name}
                about_avatar={el.about_avatar}
                about_post={el.about_post}
                post_picture={el.post_picture}
                time={el.time}
                likes={el.likes}
                icons={el.icons}
              />
            ))}
          </div>
          <div className="rightSide">
            <div className="rightContainer">
              <h3 className="connectHeading">Who to Connect</h3>
              <hr className="connectLine" />
              {WHO_TO_CONNECT.map((el, i) => (
                <WhoToconnect
                  key={i}
                  name={el.name}
                  username={el.username}
                  avatar={el.avatar}
                />
              ))}
              <hr />
              <div className="showMorediv">
                <h4>
                  Show more <FontAwesomeIcon icon={faAngleDown} />{" "}
                </h4>
              </div>
            </div>
            <footer className="footer">
              <div>
                <span>About</span>
                <span>Accessibility</span>
                <span>Help Center</span>
              </div>
              <div>
                <span>
                  Privacy & Terms{" "}
                  {<FontAwesomeIcon className="downArrow" icon={faAngleDown} />}
                </span>
                <span>Ad Choices</span>
              </div>
              <div>
                <span>Advertising </span>
                <span>
                  Business Services{" "}
                  {<FontAwesomeIcon className="downArrow" icon={faAngleDown} />}
                </span>
              </div>
              <div>
                <span>Get the LinkedIn app</span>
                <span>More</span>
              </div>
              <div className="corporation">
                <span className="linked">
                  Linked <span className="in">in</span>
                </span>
                <span>LinkedIn corporation © 2022</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

const NavbarIcons = (props) => {
  return (
    <div className="btnicon">
      <span>{props.icon}</span>
      <span className="icontext">{props.text}</span>
    </div>
  );
};

function UserPosts(props) {
  return (
    <div className="postsMainDiv">
      <div className="useDetails">
        <div className="avatarDetails">
          <img className="userAvatar" src={props.avatar} alt="" />
          <div>
            <h4>{props.name}</h4>
            <p>{props.about_avatar}</p>
            <div className="postime">
              <p>{props.time}</p>
              <div className="dot"></div>
              <FontAwesomeIcon className="earthIcon" icon={faEarth} />
            </div>
          </div>
        </div>
        <div className="followbtn">
          <p>+</p>
          <h5>Follow</h5>
        </div>
      </div>
      <div className="aboutPost">
        <p>{props.about_post}</p>
      </div>
      <div className="postPicture">
        <img src={props.post_picture} alt="" />
      </div>
      <div className="likes">
        <div className="likeIcon">
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
          <div className="lightIcon">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <div className="lightIcon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <p>{props.likes}</p>
      </div>
      <div className="hr"></div>
      <div className="viewerReactionMain">
        {props.icons.map((e, i) => (
          <div key={i} className="viewerReaction">
            <h5>{e.icon}</h5>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const WhoToconnect = (props) => {
  return (
    <div className="whoToConnect_container">
      <div className="account">
        <div className="img_src">
          <img src={props.avatar} alt="userAvatar" />
        </div>
        <div className="connect_user_name">
          <h3>{props.name}</h3>
          <h4>@{props.username}</h4>
        </div>
      </div>

      <button className="connect_btn">Connect</button>
    </div>
  );
};

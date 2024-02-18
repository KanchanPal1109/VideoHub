import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../css/Home.css";
import { useLikedItems } from "../ContextApi/PlayListContext";
import NoDataFound from "./NoDataFound";
import Loader from "./Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function PlayList() {
  const [videoUrl, setVideoUrl] = useState(null);
  const { likedItems, removeItem } = useLikedItems();
  const [showLoader, setshowLoader] = useState(false);

  console.log(likedItems);

  const handleVideoPlay = (url) => {
    setVideoUrl(url);
  };

  const handleUnlike = async(itemId) => {
    await removeItem(itemId);
  };

  return (
    <div>
      <h3 className="homeheading">My Playlist </h3>
      {showLoader && <Loader />}
      {likedItems.length !== 0 ? (
        <div className="video-list">
          {likedItems?.map((video) => (
            <div key={video.id} className="video-item">
              <h4>{video.title}</h4>
              <button className="remove-video"
                 onClick={() => {
                  setshowLoader(true);
                  setTimeout(() => {
                    setshowLoader(false)
                    handleUnlike(video.id);
                  }, 500);
                }}
              >
  <i className="fas fa-trash-alt"></i>
              </button>
              <ReactPlayer
                url={video.src}
                controls
                width="100%"
                height="auto"
                onStart={() => handleVideoPlay(video.src)}
                config={{
                  file: {
                    attributes: {
                      poster: video.thumbnail, // Set the thumbnail as poster
                    },
                  },
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
      {videoUrl && (
        <div className="modal">
          <button className="close-btn" onClick={() => setVideoUrl(null)}>
            Close
          </button>
          <ReactPlayer
            url={videoUrl}
            controls
            width="75%"
            height="75%"
            playing // Auto play the video when modal opens
          />
        </div>
      )}
    </div>
  );
}
export default PlayList;

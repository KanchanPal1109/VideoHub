import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../css/Home.css";
import { useLikedItems } from "../ContextApi/PlayListContext";
import Loader from "./Loader";
import Modal from "./Modal";
import { useUser } from "../ContextApi/UserContext";

const videos = [
  {
    id: 1,
    title: "BUGATTI CHIRON",
    src: "https://www.youtube.com/watch?v=NMThdHhrLoM",
    thumbnail: "https://example.com/thumbnail1.jpg",
  },
  {
      id: 2,
      title: "Flame Spitting R35 GTR",
      src: "https://www.youtube.com/watch?v=vlDOjTaaEdA",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    {
      id: 3,
      title: "Until I Found You",
      src: "https://www.youtube.com/watch?v=FM9-OV2TE5w",
      thumbnail: "https://example.com/thumbnail1.jpg",
    },
    {
      id: 4,
      title: "Guitar Cover",
      src: "https://www.youtube.com/watch?v=PCiWTRg-itY",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    {
      id: 5,
      title: "Forest",
      src: "https://www.youtube.com/watch?v=4bHUsy74Fss",
      thumbnail: "https://example.com/thumbnail1.jpg",
    },
    {
      id: 6,
      title: "The end of privacy",
      src: "https://www.youtube.com/watch?v=uiGl6oF5-cE",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    {
      id: 7,
      title: "Super car",
      src: "https://www.youtube.com/watch?v=NMThdHhrLoM",
      thumbnail: "https://example.com/thumbnail1.jpg",
    },
    {
        id: 8,
        title: "GTR",
        src: "https://www.youtube.com/watch?v=vlDOjTaaEdA",
        thumbnail: "https://example.com/thumbnail2.jpg",
      },
      {
        id: 9,
        title: "Zuck",
        src: "https://www.youtube.com/watch?v=uiGl6oF5-cE",
        thumbnail: "https://example.com/thumbnail1.jpg",
      },
      {
          id: 10,
          title: "Porche",
          src: "https://www.youtube.com/watch?v=vlDOjTaaEdA",
          thumbnail: "https://example.com/thumbnail2.jpg",
      },
 
];
export default function Home() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useLikedItems();
  const { userData } = useUser();

  const handleVideoPlay = (url) => {
      setVideoUrl(url);
    };
  
    const handleLike = (item) => {
      if (userData !== null) {
        setShowLoader(true);
        setTimeout(() => {
          setShowLoader(false);
          addItem(item);
        }, 500);
      } else {
        openModal();
      }
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="homemain">
        <h3 className="homeheading">Home</h3>
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search videos..."
          />
        </div>
        {showLoader && <Loader />}
        <div className="video-list">
          {(searchQuery === "" ? videos : filteredVideos).map((video) => (
            <div key={video.id} className="video-item">
              <h5>{video.title}</h5>
              <button className="save-to-playlist" onClick={() => handleLike(video)}>
                <i className="fas fa-save"></i>
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
                      poster: video.thumbnail,
                    },
                  },
                }}
              />
            </div>
          ))}
        </div>
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
              playing
            />
          </div>
        )}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h4>Ahoy! Only logged-in users can access this. Time to log in!</h4>
        </Modal>
      </div>
    );
  }
  
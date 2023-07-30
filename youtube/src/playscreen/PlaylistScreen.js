import React from 'react';
import './playlistscreen.css'; // Import the CSS file for styling
import  player  from '../images/video.png';

const PlaylistScreen = () => {
  const playlistItems = [
    {
      id: '1',
      title: 'Video 1 Title',
      description: 'Description of Video 1',
      thumbnail: player,
    },
    {
      id: '2',
      title: 'Video 2 Title',
      description: 'Description of Video 2',
      thumbnail: player,
    },
    {
      id: '3',
      title: 'Video 2 Title',
      description: 'Description of Video 2',
      thumbnail: player,
    },
    {
      id: '4',
      title: 'Video 2 Title',
      description: 'Description of Video 2',
      thumbnail: player,
    },
    {
      id: '5',
      title: 'Video 2 Title',
      description: 'Description of Video 2',
      thumbnail: player,
    },
  ];

  return (
    <div className="playlist-container">
      <h2>YouTube Playlist</h2>
      <ul className="playlist">
        {playlistItems.map((item) => (
          <li key={item.id} className="playlist-item">
             <img src={item.thumbnail} alt='player' />
            <div class="title">
                <h3>
                    Introduction To Webdevelopment
                 </h3>
                 <a href="/">
                        Saunak Malla
                  </a>
                  <span> 2M Views • 3 Months Ago </span>
             </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistScreen;
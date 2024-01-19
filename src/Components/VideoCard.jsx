import React from "react";

const VideoCard = ({ data }) => {
  console.log(data);
  const { snippet, statistics } = data;

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-5 m-3 shadow-lg w-[326px]">
      <img src={thumbnails?.medium?.url} />
      <div className="font-bold text-sm">{title}</div>
      <div>{channelTitle}</div>
      <div>{statistics?.viewCount} views</div>
    </div>
  );
};

export default VideoCard;

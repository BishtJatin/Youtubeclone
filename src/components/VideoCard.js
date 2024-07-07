import React from 'react'

const VideoCard = ({ data }) => {




  return (
    <div className='w-1/5 flex flex-col shadow px-2 py-4 rounded-md'>
      <img src={data.snippet.thumbnails.medium.url} />

      <h3 className='text-sm'>{data.snippet.title}</h3>

      <p className='text-sm text-left mt-1 pl-2'>{data.statistics.viewCount} views</p>


    </div>
  );
}

export default VideoCard;
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { api_key } from '../utils/Constant';

const VideoContainer = () => {
 const [videodata , setVideodata] = useState([]);



    const FetchApi = async () =>{
        const api = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + api_key;
        const data = await fetch(api);
        const json = await data.json();
        
        setVideodata(json.items);
        
    }
    // console.log(videodata);
    useEffect(()=>{
      FetchApi();
    },[]);

    
  return (
    
    <div className='mt-5 ml-5 flex flex-wrap'>
       {videodata.length > 0 ? (
        videodata.map((video) => <VideoCard key={video.id} data={video} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default VideoContainer;
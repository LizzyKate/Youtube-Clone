import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import {Videos, ChannelCard} from './'


const ChannelDetail = () => {
  const {id} = useParams()
  const [channel, setChannel] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannel(data?.items[0])
      })
      fetchFromApi(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => {
        setVideos(data?.items)
      })
  }, [id])

  return (
   <Box minHeight="95vh">
     <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channel} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
   </Box>
  )
}

export default ChannelDetail
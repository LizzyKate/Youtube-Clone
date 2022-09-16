import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'
import {Videos} from '.'
import { useParams } from 'react-router-dom'




const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {
      setVideos(data.items)
  })
  }, [searchTerm])
  return (
    <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2 }}>
    <Typography variant='h4' fontWeight="bold" mb="2" sx={{color:'#fff'}}> Search results for 
      <span style={{color:'#F31503', marginLeft:'10px'}}>{searchTerm}</span> videos
    </Typography>
    <Videos videos={videos}/>
  </Box>
  )
}

export default SearchFeed
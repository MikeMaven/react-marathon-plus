import React from 'react'

const Playlist = (props) => {
  return(
    <div onClick={props.handleClick} className={props.selectedClass}>
    {props.playlist.name}</div>
  )
}

export default Playlist

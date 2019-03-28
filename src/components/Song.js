import React from 'react'

const Song = (props) => {

  return(
    <div onClick={props.handleSongClick} className={props.songClassName}>
      {props.name} - {props.artist}
    </div>
  )
}


export default Song

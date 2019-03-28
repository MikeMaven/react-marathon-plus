import React, { Component} from 'react'

import Song from './Song.js'

class SongCollection extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedSongId: null
    }

    this.handleSongSelect = this.handleSongSelect.bind(this)
  }

  handleSongSelect(id){
    this.setState({selectedSongId: id })
  }

  render(){

    let songs = this.props.songs

    let songList = songs.map(song => {

      let songClassName = ""
      if (song.id === this.state.selectedSongId) {
        songClassName = "selected"
      }

      let handleSongClick = () => {
        this.handleSongSelect(song.id)
      }

      return(
        <Song
          name ={song.name}
          artist={song.artist}
          key={song.id}
          songClassName={songClassName}
          handleSongClick={handleSongClick}
         />
      )
    })

    return(
      <div>
        {songList}
      </div>
    )
  }

}
export default SongCollection

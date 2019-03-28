import React, {Component} from 'react'
import Playlist from './Playlist'

class PlaylistCollection extends Component {
  constructor(props){
    super(props)
    this.state= {
      selectedPlaylist: null
    }
    this.handlePlaylistSelection = this.handlePlaylistSelection.bind(this)
  }

  handlePlaylistSelection(id) {
    this.setState({selectedPlaylist: id})
  }

  render(){
    console.log(this.state.selectedPlaylist)
    let playlists = this.props.playlists
    let playlistArray = playlists.map((playlist) => {

      let playlistClosure = () => {
        return this.handlePlaylistSelection(playlist.id)
      }

      let selectedClass = ""
      if (this.state.selectedPlaylist === playlist.id){
        selectedClass = "selected"
      }

      return <Playlist
        key={playlist.id}
        playlist={playlist}
        selectedClass={selectedClass}
        handleClick={playlistClosure}
      />
    })

    return(
      <div>
        {playlistArray}
      </div>
    )
  }
}
export default PlaylistCollection;

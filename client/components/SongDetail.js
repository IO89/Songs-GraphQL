import React from 'react';
import {graphql} from "react-apollo";
import fetchSong from '../queries/fetchSong';
import {Link} from "react-router";
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongDetail = (props) => {
  const {song} = props.data;

  if (!song) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics}/>
      <LyricCreate songId={props.params.id}/>
    </div>
  )
};


export default graphql(fetchSong, {
  options: (props => {
    return {variables: {id: props.params.id}}
  })
})(SongDetail);
import React from 'react';

const styles = {
  container: {
    border: "1px solid black",
    textAlign: "center"
  }
}

const TileContents = props => {
  return (
    <div style={styles.container}>
      <p>I am a tile</p>
      <p>I am a beautiful and unique snowflake</p>
    </div>
  )
}

export default TileContents;

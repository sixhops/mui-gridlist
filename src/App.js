import React, { Component } from 'react';
import TileContents from './TileContents';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.root} className="App">

          <GridList style={styles.gridList} cols={2.2}>
            <GridTile>
              <TileContents />
            </GridTile>
            <GridTile>
              <TileContents />
            </GridTile>
            <GridTile>
              <TileContents />
            </GridTile>
          </GridList>

          <GridList style={styles.gridList} cols={2.2}>
            <GridTile>
              <TileContents />
            </GridTile>
            <GridTile>
              <TileContents />
            </GridTile>
          </GridList>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

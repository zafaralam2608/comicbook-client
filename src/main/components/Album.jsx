import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Grid } from '@mui/material'
import * as appActions from '../actions/appActions';
import Spinner from './Spinner';
import Thumbnail from './Thumbnail';

const Album = ({ album, dispatch }) => {
  const { profiles, profilesLoading } = album;

  useEffect(() => (
    dispatch(appActions.getProfiles())
  ), []);

  if (profilesLoading) { return <Spinner />; }

  return (
    <Box>
      <Grid container>
        {
          profiles.map(
            (profile) => (
              <Thumbnail key={profile.id} profile={profile} />
            ),
          )
        }
      </Grid>
    </Box>
  );
};

export default connect((store) => ({
  album: store.get('album'),
}))(Album);

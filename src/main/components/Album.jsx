import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import * as appActions from '../actions/appActions';
import Spinner from './Spinner';
import Thumbnail from './Thumbnail';

function Album({ album, dispatch }) {
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
}

Album.propTypes = {
  dispatch: PropTypes.func.isRequired,
  album: PropTypes.exact({
    profilesLoading: PropTypes.bool,
    profiles: PropTypes.arrayOf(PropTypes.element),
  }).isRequired,
};

export default connect((store) => ({
  album: store.get('album'),
}))(Album);

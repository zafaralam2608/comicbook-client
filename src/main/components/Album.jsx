import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material'
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
    <React.Fragment>
      <Grid container>
        {
          profiles.map(
            (profile) => (
              <Thumbnail key={profile.id} profile={profile} />
            ),
          )
        }
      </Grid>
    </React.Fragment>
  );
};

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

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Box, Card, CardContent, CardHeader, CardMedia, Grid, Table,
} from '@mui/material';
import PropTypes from 'prop-types';
import { getProfile } from '../actions/profileActions';
import { getBio } from '../actions/bioActions';
import { getAbilities } from '../actions/abilitiesActions';
import Spinner from '../commons/Spinner';
import { PHOTO_URL } from '../constants/config';
import Links from '../commons/Links';
import Panels from '../commons/Panels';

function Profile({
  profile, bio, abilities, dispatch,
}) {
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(getBio(id));
    dispatch(getAbilities(id));
  }, []);

  const {
    profileLoading, name, alias, base, debutIn, debutOn,
  } = profile;

  const {
    bioLoading, bioContent,
  } = bio;

  const {
    abilitiesLoading, abilitiesContent,
  } = abilities;

  const items = [
    {
      order: '0', label: 'Bio', loading: bioLoading, content: bioContent,
    },
    {
      order: '1', label: 'Abilities', loading: abilitiesLoading, content: abilitiesContent,
    },
  ];

  if (profileLoading) { return <Spinner />; }

  return (
    <Grid container spacing={3} alignContent="center">
      <Grid item lg={9} md={6} xs={12}>
        <Panels items={items} />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <Card>
          <CardHeader
            title={name}
            subheader={alias}
          />
          <CardMedia
            sx={{ height: '250px', width: '250px' }}
            component="img"
            src={`${PHOTO_URL}/${id}`}
            onError={(e) => { e.target.src = '../images/photo'; }}
          />
          <CardContent>
            <Table sx={{ height: '200px', width: '250px' }}>
              <tbody>
                <tr>
                  <th>Base</th>
                  <td>{base}</td>
                </tr>
                <tr>
                  <th>Debut in</th>
                  <td>{debutIn}</td>
                </tr>
                <tr>
                  <th>Debut on</th>
                  <td>{debutOn}</td>
                </tr>
              </tbody>
            </Table>
          </CardContent>
        </Card>
        <Box p={2} />
        <Links id={id} />
      </Grid>
    </Grid>
  );
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    profileLoading: PropTypes.bool,
    name: PropTypes.string.isRequired,
    alias: PropTypes.string,
    base: PropTypes.string,
    debutIn: PropTypes.string,
    debutOn: PropTypes.string,
  }).isRequired,
  bio: PropTypes.shape({
    bioLoading: PropTypes.bool,
    bioContent: PropTypes.string,
  }).isRequired,
  abilities: PropTypes.shape({
    abilitiesLoading: PropTypes.bool,
    abilitiesContent: PropTypes.string,
  }).isRequired,
};

export default connect((store) => ({
  profile: store.get('profile'),
  bio: store.get('bio'),
  abilities: store.get('abilities'),
}))(Profile);

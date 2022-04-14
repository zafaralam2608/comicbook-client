import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Table,
} from '@mui/material';
import * as profileActions from '../actions/profileActions';
import Spinner from './Spinner';
import { API_URL } from '../constants/config';

const Profile = ({ profile, dispatch }) => {

  const { id } = useParams();

  useEffect(() => {
    dispatch(profileActions.getProfile(id));
  }, []);

  const {
    loading, name, alias, base, debutIn, debutOn, links,
  } = profile;

  if (loading) { return <Spinner />; }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item lg={8} md={6} xs={12}>
          <Card>
            <CardHeader
              title="Abilities"
            />
            <CardContent
              style={{ minHeight: '200px' }}
            />
          </Card>
          <Box p={2} />
          <Card>
            <CardHeader
              title="Bio"
            />
            <CardContent
              style={{ minHeight: '450px' }}
            />
          </Card>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Card>
            <CardHeader
              title={name}
              subheader={alias}
            />
            <CardMedia
              sx={{height: '250px', width: '250px',}}
              component="img"
              src={API_URL + '/photo/' + id}
              onError={(e) => { e.target.src = '../images/photo'}}
            />
            <CardContent>
              <Table sx={{height: '200px', width: '250px',}}>
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
                  <tr>
                    <th>Official</th>
                    <td>
                      <a href={links.official}>
                        <img
                          src={API_URL + '/logo/' + id}
                          height='20px'
                          width='50px'
                          alt="o"
                          onError={(e) => { e.target.src = '../images/logo'}}
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardContent>
            <Divider />
            <CardActions>
              <a href={links.wikipedia}>
                <img src="../logos/wikipedia.svg" alt="w" />
              </a>
              <a href={links.instagram}>
                <img src="../logos/instagram.svg" alt="i" />
              </a>
              <a href={links.twitter}>
                <img src="../logos/twitter.svg" alt="t" />
              </a>
              <a href={links.facebook}>
                <img src="../logos/facebook.svg" alt="f" />
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.exact({
    loading: PropTypes.bool,
    name: PropTypes.string,
    alias: PropTypes.string,
    base: PropTypes.string,
    debutIn: PropTypes.string,
    debutOn: PropTypes.string,
    universe: PropTypes.string,
    links: PropTypes.exact({
      official: PropTypes.string,
      wikipedia: PropTypes.string,
      instagram: PropTypes.string,
      twitter: PropTypes.string,
      facebook: PropTypes.string,
    }),
  }),
};

Profile.defaultProps = {
  profile: PropTypes.exact({
    loading: false,
    name: '',
    alias: '',
    base: '',
    debutIn: '',
    debutOn: '',
    universe: '',
    links: PropTypes.exact({
      official: '',
      wikipedia: '',
      instagram: '',
      twitter: '',
      facebook: '',
    }),
  }),
};

export default connect((store) => ({
  profile: store.get('profile'),
}))(Profile);

import React from 'react';
import {
  Button, Card, CardActions, CardHeader, CardMedia,
} from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { PHOTO_URL } from '../constants/config';

function Thumbnail({ profile }) {
  const { id, name, alias } = profile;

  return (
    <Card sx={{
      height: '420px', width: '270px', margin: '10px', padding: '10px',
    }}
    >
      <CardHeader
        title={name}
        subheader={alias ?? '---'}
      />
      <CardMedia
        sx={{ height: '250px', width: '250px' }}
        component="img"
        src={`${PHOTO_URL}/${id}`}
        onError={(e) => { e.target.src = '../images/photo'; }}
      />
      <CardActions>
        <Button
          variant="text"
          href={`/profile/${id}`}
        >
          <Visibility />
          View
        </Button>
        <Button
          variant="text"
          disabled
          href={`/profile/${id}`}
        >
          <Edit />
          Edit
        </Button>
        <Button
          variant="text"
          disabled
          href={`/profile/${id}`}
        >
          <Delete />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

Thumbnail.propTypes = {
  profile: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    alias: PropTypes.string,
  }).isRequired,
};

export default Thumbnail;

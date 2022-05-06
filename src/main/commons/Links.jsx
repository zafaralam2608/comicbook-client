import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardActions } from '@mui/material';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import { getLinks } from '../actions/linksActions';
import { LOGO_URL } from '../constants/config';

function Links({ id, links, dispatch }) {
  useEffect(() => {
    dispatch(getLinks(id));
  }, []);

  const {
    linksLoading, official, wikipedia, instagram, twitter, facebook,
  } = links;

  if (linksLoading) { return <Spinner />; }

  return (
    <Card>
      <CardActions disableSpacing>
        <Button>
          <a href={official} title="Official" target="_blank" rel="noopener noreferrer">
            <img
              src={`${LOGO_URL}/${id}`}
              alt="o"
              style={{ width: '25px', height: '25px' }}
              onError={(e) => { e.target.src = '../images/logo'; }}
            />
          </a>
        </Button>
        <Button>
          <a href={wikipedia} title="Wikipedia" target="_blank" rel="noopener noreferrer">
            <img src="../logos/wikipedia.svg" alt="w" />
          </a>
        </Button>
        <Button>
          <a href={instagram} title="Instagram" target="_blank" rel="noopener noreferrer">
            <img src="../logos/instagram.svg" alt="i" />
          </a>
        </Button>
        <Button>
          <a href={twitter} title="Twitter" target="_blank" rel="noopener noreferrer">
            <img src="../logos/twitter.svg" alt="t" />
          </a>
        </Button>
        <Button>
          <a href={facebook} title="Facebook" target="_blank" rel="noopener noreferrer">
            <img src="../logos/facebook.svg" alt="f" />
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

Links.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  links: PropTypes.shape({
    linksLoading: PropTypes.bool,
    official: PropTypes.string,
    wikipedia: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
  }).isRequired,
};
export default connect((store) => ({
  links: store.get('links'),
}))(Links);

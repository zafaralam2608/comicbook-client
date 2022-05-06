import React, { useState } from 'react';
import {
  Box, Tab,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

function Panels({ items }) {
  const [currentTab, setCurrentTab] = useState('0');

  const handleChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <TabContext value={currentTab}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange}>
          {
            items.map((item) => (
              <Tab key={item.order} label={item.label} value={item.order} />
            ))
          }
        </TabList>
      </Box>
      {
        items.map((item) => (
          (item.loading)
            ? <Spinner key={item.order} />
            : <TabPanel key={item.order} value={item.order}>{item.content}</TabPanel>
        ))
      }
    </TabContext>
  );
}

Panels.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    order: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Panels;

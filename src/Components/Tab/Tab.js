import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Tab.css"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', paddingLeft:"5%"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Services" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className='tab '>
      <div className='detail'>
        <div className='tab-img'>
        <img src="https://thumbs.dreamstime.com/b/woman-facial-hair-removal-threading-procedure-attractive-beauty-salon-eyebrow-32650191.jpg" alt="" height='200px' width='200px'/>
        </div>
        <div className='boxs'>
          <div className='rows'>
        <h2>threading</h2>
        <p>Rs. 25</p>
        </div>
          {/* <p>{product.description}</p> */}
        <button className='carts'>Add to cart</button>
      </div>
      </div>
    </div>
    <div className='tab '>
      <div className='detail'>
        <div className='tab-img'>
        <img src="https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA=" alt="" height='200px' width='200px'/>
        </div>
        <div className='boxs'>
          <div className='rows'>
        <h2>facial</h2>
        <p>Rs. 500</p>
        </div>
          {/* <p>{product.description}</p> */}
        <button className='carts'>Add to cart</button>
      </div>
      </div>
      </div>

      <div className='tab '>
      <div className='detail'>
        <div className='tab-img'>
        <img src="https://assets.vogue.in/photos/5ce40b704a30b3d36212adab/16:9/pass/types-of-body-wax.jpg" alt="" height='200px' width='200px'/>
        </div>
        <div className='boxs'>
          <div className='rows'>
        <h2>wax</h2>
        <p>Rs. 250</p>
        </div>
          {/* <p>{product.description}</p> */}
        <button className='carts'>Add to cart</button>
      </div>
      </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='rating '>
      <div className='ra-detail'>
        <div className='rating-img'>
        <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
        </div>
        <div className='rate'>
          <div className='ro'>
        <h3>Bhavika</h3>
        <p>Lorem ipsum dolor sit amet consectetur!
        </p>
        </div>
      </div>
      </div>
      </div>

      <div className='rating '>
      <div className='ra-detail'>
        <div className='rating-img'>
        <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
        </div>
        <div className='rate'>
          <div className='ro'>
        <h3>Anukalp</h3>
        <p>Lorem ipsum dolor sit amet consectetur!
        </p>
        </div>
      </div>
      </div>
      </div>

      <div className='rating '>
      <div className='ra-detail'>
        <div className='rating-img'>
        <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
        </div>
        <div className='rate'>
          <div className='ro'>
        <h3>tanishka</h3>
        <p>Lorem ipsum dolor sit amet consectetur!
        </p>
        </div>
      </div>
      </div>
      </div>
    
      </TabPanel>
      
    </Box>
  );
}
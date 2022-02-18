import React from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PaidIcon from '@mui/icons-material/Paid'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import sony from '../image/sony.png'

const useStyles = makeStyles({

  positionItems: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '2px solid rgb(242, 242, 242)',
    padding: '16px',
    cursor: 'pointer',
    transition: '0.5s',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgb(242, 242, 242)',
      transform: 'scaleY(0)',
      transformOrigin: 'bottom',
      transition: 'transform 0.5s',

    },
    '&:hover::before': {
      transform: 'scaleY(1)',
      transformOrigin: 'top',
      transition: 'transform 0.5s',

    },
  },
  numbers: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  careerItems: {
    display: 'flex',
    alignItems: 'center',
    width: '25%',
    // backgroundColor: 'red',
    margin: '4px',
  },
  locationWrapper: {
    display: 'flex',
  },
})
function CareerTitle() {
  const classes = useStyles()

  return (
    <Box className={classes.positionItems}>
      <Box className={classes.numbers} sx={{ zIndex: 1 }}>
        <Typography variant="body2">
          1.
        </Typography>
        <Typography variant="body2">
          Feb 3, 2022
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ zIndex: 1 }}>
        Software Engineer
      </Typography>
      <Box className={classes.locationWrapper} sx={{ zIndex: 1 }}>
        <Box className={classes.careerItems}>
          <LocationOnIcon />
          <Typography variant="body2">
            bangkok
          </Typography>
        </Box>
        <Box className={classes.careerItems}>
          <PaidIcon />
          <Typography variant="body2">
            company structure
          </Typography>
        </Box>
      </Box>
      <Box className={classes.careerItems} sx={{ zIndex: 1 }}>
        <HeadsetMicIcon />
        <Typography variant="body2">
          Online interview
        </Typography>
      </Box>
    </Box>
  )
}

export default CareerTitle

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import {
  Button, Skeleton, FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PaidIcon from '@mui/icons-material/Paid'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import PersonIcon from '@mui/icons-material/Person'
import SendIcon from '@mui/icons-material/Send'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import AssignmentIcon from '@mui/icons-material/Assignment'
import useMediaQuery from '@mui/material/useMediaQuery'
import PropTypes from 'prop-types'
import BusinessIcon from '@mui/icons-material/Business'
import _get from 'lodash/get'
import Dialog from './Dialog'
import TypographyLoading from './Typography'
import DragAndDrop from './DragAndDrop'
import usePdfUpload from '../libs/usePdfUpload'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(248 248 248)',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 0 8px 2px #939393',

  },
  dateBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  careerItems: {
    display: 'flex',
    alignItems: 'center',
    width: '25%',
    // backgroundColor: 'red',
    margin: '5px',
  },
  careerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10rem',
    // backgroundColor: 'red',
    margin: '5px',
    padding: '5px',
    backgroundColor: theme.palette.primary.medium,
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)',
    color: '#fff',
    borderRadius: '8px',
  },
  careerDes: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
  },
  locationWrapper: {
    display: 'flex',
  },
}))
function CareerAbout({ data, loading }) {
  const pdfUpload = usePdfUpload()
  const classes = useStyles()
  const [applyType, setApplyType] = useState('')
  const [myFiles, setMyFiles] = useState([])
  const [open, setOpen] = useState(false)
  const mediaQuery = useMediaQuery('(min-width:600px)')

  const handleClose = () => {
    setOpen(false)
    setApplyType('')
  }
  const handleSubmit = () => {
    const pdfLink = pdfUpload(myFiles)
  }
  return (
    <Box className={classes.container}>
      <Box className={classes.dateBox}>
        {loading ? (
          <Skeleton width={80} height={20} />
        ) : (
          <Typography variant="body2">{_get(data, 'createdAt')}</Typography>
        )}
      </Box>
      {loading ? (
        <Skeleton width={150} height={40} />
      ) : (
        <Typography variant="h6">{data?.position}</Typography>
      )}
      <Box className={classes.locationWrapper}>
        <Box className={classes.careerItems}>
          <LocationOnIcon />
          <Typography
            variant="body2"
            style={{ display: mediaQuery ? 'inline-block' : 'none' }}
          >
            Location
          </Typography>
        </Box>
        <Box className={classes.careerDes}>
          <TypographyLoading
            loading={loading}
            heightSkeleton="20"
            variant="body2"
          >
            {data?.location}
          </TypographyLoading>
        </Box>
      </Box>
      <Box className={classes.locationWrapper}>
        <Box className={classes.careerItems}>
          <PaidIcon />
          <Typography variant="body2">Salary</Typography>
        </Box>
        <Box className={classes.careerDes}>
          <TypographyLoading
            loading={loading}
            heightSkeleton="20"
            variant="body2"
          >
            {data?.salary}
          </TypographyLoading>
        </Box>
      </Box>
      <Box className={classes.locationWrapper}>
        <Box className={classes.careerItems}>
          <PersonIcon />
          <Typography variant="body2">Vacancies</Typography>
        </Box>
        <Box className={classes.careerDes}>
          <TypographyLoading
            loading={loading}
            heightSkeleton="20"
            variant="body2"
          >
            {data?.positionTotal}
            {' '}
            positions
          </TypographyLoading>
        </Box>
      </Box>
      {loading ? (
        <Skeleton width={150} height={40} />
      ) : (
        <Box className={classes.careerBox}>
          {data?.interview === 'Online Interview' ? (
            <HeadsetMicIcon />
          ) : (
            <BusinessIcon />
          )}
          <Typography variant="body2">{data?.interview}</Typography>
        </Box>
      )}
      <Box className={classes.dateBox}>
        <Button
          style={{
            maxWidth: '300px',
            minWidth: '100px',
            marginLeft: '13px',
          }}
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => setOpen(true)}
        >
          Apply Now
        </Button>
      </Box>
      <Dialog
        open={open}
        title="Apply"
        onClose={handleClose}
        btLabel="Send"
        submitFunc={handleSubmit}
      >
        <Box>
          <DragAndDrop myFiles={myFiles} setMyFiles={setMyFiles} />
          <FormControlLabel control={<Checkbox />} label="ยืนยันการส่งข้อมูลประวัติส่วนตัว" />
        </Box>
      </Dialog>
    </Box>
  )
}

export default CareerAbout
CareerAbout.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.bool,
}
CareerAbout.defaultProps = {
  data: [],
  loading: false,
}

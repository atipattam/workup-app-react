import React, { useState } from 'react'
import {
  Box, MenuItem, Button, TextField, IconButton,
} from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import _map from 'lodash/map'
import PropTypes, { any } from 'prop-types'
import _isEmpty from 'lodash/isEmpty'

function App({
  loading, label, keyText, state, setState,
}) {
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...state]
    list[index] = value
    setState(list)
  }

  // handle click event of the Remove Button
  const handleRemoveClick = (index) => {
    const list = [...state]
    list.splice(index, 1)
    setState(list)
  }

  // handle click event of the Add Button
  const handleAddClick = () => {
    setState([...state, ''])
  }

  return (
    <>
      {_map(state, (value, i) => (
        <Box
          key={keyText + i}
          sx={{
            display: 'flex',
            mt: 2,
          }}
        >
          {state.length - 1 === i
           && (
             <IconButton aria-label="add" onClick={handleAddClick} color="success">
               <AddCircleOutlineOutlinedIcon />
             </IconButton>
           )}
          {state.length !== i + 1 && (
            <IconButton aria-label="delete" onClick={() => handleRemoveClick(i)} color="error">
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
          )}
          <TextField
            sx={{ ml: 0.2 }}
            required
            label={label}
            autoComplete="off"
            value={value}
            error={loading && _isEmpty(value)}
            helperText={
                    loading && _isEmpty(value) && `please fill ${label}`
                  }
            onChange={(e) => handleInputChange(e, i)}
            fullWidth
          />

        </Box>
      ))}
    </>
  )
}

export default App
App.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string,
  keyText: PropTypes.string,
  state: PropTypes.arrayOf(PropTypes.any),
  setState: PropTypes.func,
}
App.defaultProps = {
  loading: null,
  label: '',
  keyText: '',
  state: [],
  setState: () => {},
}
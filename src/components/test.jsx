import { Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export const test = () => {
    const [anchorElm, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClose = ()=>{
        setAnchorElm(null);
        setOpen(null);
    }
    const handleClick = (e)=>{
        setAnchorElm(e.currentTarget);
    }
    return (
    <div>
        <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>

        
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
    
        </Menu>
    </div>
  )
}

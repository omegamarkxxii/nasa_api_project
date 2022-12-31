import { useState } from 'react';
import {Typography, List, ListItemButton, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import style from './style';

const CollapseList = ({setID, collapseListHeading, listButtons }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const handleBtnClick = (id) => {
        setID(id);
    };

    return ( 
        <List
            disablePadding
            sx={style.root}
            component="nav"
            aria-labelledby="nested-rover-list"
        >
            <ListItemButton divider  onClick={handleClick}>
                <ListItemText
                    disableTypography 
                    primary={
                        <Typography variant='button'
                            sx={{color: 'grey.800', pl: 2}}
                        >
                            {collapseListHeading}
                        </Typography>
                    }
                />
                {open ? <ExpandLess sx={{pr: 2}} fontSize="large" /> : <ExpandMore sx={{pr: 2}} fontSize="large"  />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {listButtons.map((btn ,idx) => {
                        return (  
                            <ListItemButton key={idx} onClick={() => handleBtnClick(btn.id)} divider sx={style.divider}>
                                <ListItemIcon>
                                    <ArrowRightIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography 
                                    primary={
                                        <Typography variant='button' align="right" sx={style.btnText}>
                                            {btn.name}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        )
                    })}

                </List> 
            </Collapse>
        </List>
    )
}
 
export default CollapseList;
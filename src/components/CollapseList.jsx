import { useState } from 'react';
import {Typography, List, ListItemButton, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
            sx={{ 
            width: '100%', 
            maxWidth: "100%", 
            bgcolor: 'background.paper',

            }}
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
                {open ? <ExpandLess sx={{pr: 2}} /> : <ExpandMore sx={{pr: 2}} />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {listButtons.map((btn ,idx) => {
                        return (  
                            <ListItemButton key={idx} onClick={() => handleBtnClick(btn.id)} divider sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <ArrowRightIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography 
                                    primary={
                                        <Typography variant='button' align="right" 
                                            sx={{color: 'primary.main', fontSize: 13}}
                                        >
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
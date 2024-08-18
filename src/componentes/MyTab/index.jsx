import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';



export default function MyTab(props) {
    return (
        <>
            <Tabs aria-label="icon label tabs example" sx={{ backgroundColor: '#0B3B60', }}>
                <Tab sx={{ color: 'white' }} icon={<HomeIcon />} label="Home" />
                <Tab sx={{ color: 'white' }} icon={<CalendarMonthIcon />} label="Consultas" />
                <Tab sx={{ color: 'white' }} icon={<SearchIcon />} label="Explorar" />
                <Tab sx={{ color: 'white' }} icon={<PersonIcon />} label="Perfil" />
            </Tabs>
        </>

    );
};
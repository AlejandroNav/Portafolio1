import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import './toggle.css'
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className='toggle'>
            <Icon className='toggle-icon' icon="akar-icons:moon" />
            <Icon className='toggle-icon' icon="solar:sun-bold-duotone" rotate={2} />
            <div className="toggle-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 40 }}></div>
        </div>
    )
}

export default Toggle
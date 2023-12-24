import React from 'react'
import './about.css'
import cdmx from '../../assets/cdmx.jpg'
const about = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card a-bg"></div>
                <div className="a-card">
                    <img src={cdmx}alt="" />
                </div>
            </div>
            <div className="a-right">rig</div>
        </div>
    )
}

export default about
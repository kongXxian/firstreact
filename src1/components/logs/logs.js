import React from 'react'

import Log from './log/log'
class Logs extends React.Component{
    render(){
        return(
            <div className='Logs'>
                <Log {...this.props}/>
            </div>
        )
    }
}

export default Logs
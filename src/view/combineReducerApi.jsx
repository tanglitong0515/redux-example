import React from 'react'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

class Views extends React.Component {
    render() {
        return(
            <div>
                <SubHeader title='combineReducerApi'/>
            </div>
        )
    }
}

export default hot(module)(Views)
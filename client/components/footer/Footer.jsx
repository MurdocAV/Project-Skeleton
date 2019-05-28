import React from 'react'
import FooterNav from './FooterNav'

class Footer extends React.Component {
    render () {
        return(
            <React.Fragment>
                <h1>Footer component rendering</h1>
                <FooterNav></FooterNav>
            </React.Fragment>
        )
    }
}

export default Footer
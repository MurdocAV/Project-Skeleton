import React from 'react'
import AboutUs from './AboutUs'
import LinkCard from './LinkCard'
import WhyUs from './WhyUsCard'
import MeetUp from './MeetUp'


class Content extends React.Component {
    render () {
        return(
            <React.Fragment>
                <h1>Content component rendering</h1>
                <AboutUs></AboutUs>
                <LinkCard></LinkCard>
                <WhyUs></WhyUs>
                <MeetUp></MeetUp>
            </React.Fragment>
        )
    }
}

export default Content
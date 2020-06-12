import React from 'react'
import './WorkList.css'
import Colorful from '../../../assets/colorful.png'
import Goalpost from '../../../assets/goalpost.png'
import Gifractor from '../../../assets/gifractor.png'
import Riocart from '../../../assets/riocart.png'

import WorkItem from './work-item/WorkItem'

const WorkList = props => {
    return (
        <div className="Work-list">

            <WorkItem
                title="Colorful"
                img={Colorful}
                live="https://colorful.now.sh"
                github="https://github.com/DheerajMahra/colorful"
            >Colorful is an app that helps designers and developers to choose color palettes for their next successful project. It has a collection of fresh palettes created by people everyday.</WorkItem>

            <WorkItem
                title="Goalpost"
                img={Goalpost}
                live="https://goalpost.now.sh"
                github="https://github.com/DheerajMahra/goalpost"
            >Goalpost tracks your goal for the day so that people can see what you are working on and get motivation from you. Become more productive and have a clear vision of what you want to achieve today.</WorkItem>

            <WorkItem
                title="Gifractor"
                img={Gifractor}
                live="https://gifractor.now.sh"
                github="https://github.com/DheerajMahra/gifractor"
                borderYellow
            >Record yourself and create custom meme gifs. This app lets you to create two second gifs using your front camera. Download and share the gif and let the meme gif war begin!</WorkItem>

            <WorkItem
                title="Riocart"
                img={Riocart}
                live="https://riocart.now.sh"
                github="https://github.com/DheerajMahra/riocart-redux"
                borderOrange
            >Riocart is an e-commerce mobile store that mocks the functionality of a real-world shopping app. It allows you to add a product to cart, wishlist a product and checkout.</WorkItem>

        </div>
    )
}

export default WorkList

import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faCoffee, faForward, faStarOfLife, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {faIdeal} from '@fortawesome/free-brands-svg-icons';

import '../new-work-on-style.css';


export function MainCoolUI() {
    return (
        <div className="explain cool-ui">
            <h1>Here you will see things of cool UI, such styles, animations, 3rd parties, etc...</h1>
            <h2>U need to give it space at the parent - otherwise it won't show</h2>
            <p><a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react" target="_blank">docs</a>
            </p>
            <p>You can import each of them as object and use them. You have
                <a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=brands&m=free" target={"_blank"}
                > here</a> the list. Notice that when import you need to get it in camelCase. For example fa-coffee is
                faCoffee. See inside. </p>

            <p>I think that here is the place :
                https://fontawesome.com/v6.0/icons?d=gallery&p=1&s=all&m=free</p>
            <p>Notice that you have two libraries - free solid, and free brand. </p>

            {/*// Light:*/}
            {/*<FontAwesomeIcon icon={["fal", "coffee"]} />*/}
            {/*// Regular:*/}
            {/*<FontAwesomeIcon icon={["far", "coffee"]} />*/}
            {/*// Solid*/}
            {/*<FontAwesomeIcon icon={["fas", "coffee"]} />*/}
            {/*// ...or, omit as FontAwesome defaults to solid, so no need to prefix:*/}
            {/*<FontAwesomeIcon icon="coffee" />*/}
            {/*// Brand:*/}
            <FontAwesomeIcon icon={["fab", "facebook"]}/>
            <br/>
            <FontAwesomeIcon icon="coffee"/>
            <br/>
            <FontAwesomeIcon icon={faCoffee}/>
            <br/>
            <FontAwesomeIcon icon={faCheckSquare}/>
            <br/>
            <FontAwesomeIcon icon={faForward}/>
            <br/>
            <FontAwesomeIcon icon={faStarOfLife}/>
            <br/>
            xs -
            <FontAwesomeIcon icon={faIdeal} size="xs"/>
            <br/>
            lg -
            <FontAwesomeIcon icon={["fab", "think-peaks"]} size="lg"/>
            <p>Note that icon size can be controlled with the CSS font-size attribute, and FontAwesomeIcon's size prop
                determines icon size relative to the current font-size.</p>
            <br/>
            by class:
            <FontAwesomeIcon icon="coffee" fixedWidth className={"big-font-awe"}/>
            <br/>
            fixed-width:
            <FontAwesomeIcon icon="coffee" fixedWidth className={"font-awe"}/>
            <br/>
            Inverse:
            (see here about advanced styles of icons -
            https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/stacking-icons)
            <FontAwesomeIcon icon="coffee" inverse/>

            <br/>
            Rotation
            <FontAwesomeIcon icon="coffee" rotation={180}/>
            <br/>
            Flipping:
            <FontAwesomeIcon icon="coffee" flip="horizontal"/>
            <FontAwesomeIcon icon="coffee" flip="vertical"/>
            <FontAwesomeIcon icon="coffee" flip="both"/>

            <br/>
            Animating Icons:

            <FontAwesomeIcon icon={faSpinner} spin/>
            <FontAwesomeIcon icon= {faSpinner} pulse/>
            <br/>
            Bordered Icons:

            <FontAwesomeIcon icon="coffee" border/>

                <br/>
                Pulled Icons:

                <FontAwesomeIcon icon="coffee" pull="left" />
                <FontAwesomeIcon icon="coffee" pull="right" />

                <br/>
                <p>I get to here (at the docs): Swap Opacity. I think it's enough for what we need.

                </p>


        </div>
    )
}
import React from "react"
import './style.css'

function item(props) {

    return (

        <div className="item">
            <div className="overlay">
                {props.children}
                <p>
                    To keep connected with us please login with your personal
                    info
                </p>
                <p>
                    To keep connected with us please login with your personal
                    info
                </p>
                <p>
                    To keep connected with us please login with your personal
                    info
                </p>

            </div>

        </div>
    )

}

export default item

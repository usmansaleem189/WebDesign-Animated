import React from 'react';
import thankyou from './gifs/thankyou.gif'

export const FooterComponent = () => {
    return (
        <div className="footerContainer">
            {/* <div>Thank You for visiting our Website</div> */}
            <img src={thankyou} alt="thankyou" height="100px"/>
        </div>
    )
}

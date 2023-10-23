import React from "react";
import image1 from '../../Resources/laptop-2298286_1280.png';

export const TopHeaderContainer = () : JSX.Element => {
    const headerMessage: JSX.Element = 
        <div className = "text-left ps-5 text-gray-900 text-weight-500">
            <h1 className = "text-5xl text-weight-900">
            Best Crypto Signals 2023 <br/>Crypto signals - mobile
            </h1>
            <p>
                CryptoSignals.org is a team of highly trained traders that have been trading the cryptocurrency market since 2014. We decided to form a community on Telegram so that others can learn from our accurate cryptocurrency signals.
            </p>
        </div>

    const headerImage : JSX.Element = 
        <div>
            <img src = {image1} alt = 'Crypto-Currency' style = {{height: '100%', width: '100%'}}/>
        </div>
    return (
        <div className = "flex mt-3 items-center justify-center">
            {headerMessage}
            {headerImage}
        </div>
    )
}
import React from "react";
import image1 from '../../Resources/laptop-2298286_1280.png';

export const TopHeaderContainer = () : JSX.Element => {
    const headerMessage: JSX.Element = 
            <h1 className = "text-5xl text-white text-weight-900">
                Best Crypto Signals 2023 <br/>Crypto signals - mobile
            </h1>

    const headerImage : JSX.Element = 
        <div className = "grid h-100 place-items-center">
            <img src = {image1} alt = 'Crypto-Currency' className = "h-auto w-auto max-h-64 max-w-64"/>
        </div>
    return (
        <div className = "flex justify-between items-center p-4">
            {headerMessage}
            {headerImage}
        </div>
    )
}
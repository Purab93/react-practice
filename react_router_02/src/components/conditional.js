import React from 'react';

const Conditional = () => {
    const value = true;

    const returnValue = () => {
        ///
        return true;
    }

    const showIt = () => {
        return returnValue() ? <div>Hello its true</div> : null
    }

    return (
        <div>
            {showIt()}
        </div>
    )
}

export default Conditional;
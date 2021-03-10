import React, { Fragment, useEffect, useState } from 'react';

const Clock = () => {
    const [clock, set_clock] = useState(<Fragment></Fragment>)

    useEffect(() => {
        const clock = <canvas></canvas>
        set_clock(clock);
    }, [])
    
    return (
        clock
    )
}

export default Clock
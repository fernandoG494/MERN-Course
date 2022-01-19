import React, {memo} from 'react';

const Small = memo(({ value }) => {

    console.log("nuevamente llamado");
    return <small>{ value }</small>;
});

export default Small;

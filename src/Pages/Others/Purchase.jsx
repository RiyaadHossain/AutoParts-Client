import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Purchase Page: {id}</h1>
        </div>
    );
};

export default Purchase;
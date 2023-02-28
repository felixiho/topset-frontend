 import React from 'react';

const SelectedButton = (props: any) => {
    return (
        <p className="text-sm uppercase text-topset-100 pb-1 pr-3">
            {props.title}
        </p>
    );
};

export default SelectedButton;
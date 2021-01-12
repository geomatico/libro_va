import React from 'react';
import PropTypes from 'prop-types';
import './icon.css';

export const Icon= ({primary, image, label, ...props})=>{
    const mode=primary ? 'icon-checked': 'icon-trash';
    const sizeIcon=primary ? 'small':'large';
    return(
        <button
            type='button'
            className={mode}
            {...props}    
        ><img src={image} alt={label} className={sizeIcon}/>
        </button>
    )
}

Icon.propTypes ={
    primary: PropTypes.bool,
    image: PropTypes.string.isRequired,
    label: PropTypes.string, 
    onClick: PropTypes.func,
};

// Icon.defaultProps={
//     primary: true,
//     image: './media/bxs-check-circle.svg',
//     onClick: undefined,
// };
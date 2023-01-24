import { styled } from "@stitches/react";

const Button = styled('button', {
    all: 'unset',
    border: '1px solid #dddddd',
    padding: '10px',

    ':active': {
        backgroundColor: '#dddddd'
    },

    ':hover': {
        backgroundColor: '#eeeeee'
    },
})

import * as React from 'react';
import MyButton from '../MyButton';

export default function MyButtonMedio(props) {
    return (
        <MyButton
            variant="contained"
            endIcon={props.icon}
            backgroundcolor={props.backgroundcolor}
            colortext={props.colortext}
            border={props.border}
            text={props.text}
        />
    );
}
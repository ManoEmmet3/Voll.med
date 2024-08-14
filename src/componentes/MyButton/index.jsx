import { Button } from "@mui/material";
import PropTypes from 'prop-types'; //

export default function ButtonFinal(props) {
    return (
        <Button
            variant={props.variant}
            sx={{
                color: props.textColor,
                marginTop: '19px',
                backgroundColor: props.color,
                borderRadius: 2,
                width: props.width,
                height: '48px',
                fontSize: props.fontSize,
                '&:hover': {
                    backgroundColor: '#FFFF',
                    color: '#3c52b2',
                },
            }}
        >
            {props.label}
        </Button>
    );
}
ButtonFinal.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    width: PropTypes.string,
    fontSize: PropTypes.string,
    label: PropTypes.string,
};

ButtonFinal.defaultProps = {
    variant: 'contained',
    size: 'medium',
    color: '#1976d2',
    fontSize: '16px',
    label: 'Button',
};
import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import { Slide } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SlideAlert(props) {
    const { open, onClose, type, message, direction, disableBgColor } = props;

    const colors = {
        success: '#00cc6650',
        info: "#0099ff60",
        warning: "#cc330060",
        error: "#99000060",

    }


    return (
        <Slide in={open ?? false} style={{ width: '90%' }} direction={direction ?? 'up'} >
            <div spacing={2} onClick={onClose} style={{ position: 'fixed', top: 0, left: 0, zIndex: 3001, width: '100%', height: '100%', backgroundColor: disableBgColor ? '#8c8c8c70' : colors[type ?? 'info'], overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Alert onClose={onClose} severity={type ?? 'info'} sx={{ maxWidth: 350 }}>
                    <span style={{ textAlign: 'center', fontSize: 13, textTransform: 'capitalize' }}>{type ?? ''}</span>
                    <div style={{ fontSize: 'medium' }}> {message ?? ''}</div>
                </Alert>
            </div>
        </Slide>
    );
}
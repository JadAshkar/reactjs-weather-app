import React from "react";


import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const LocationDialog = props => {
    const { open , handleClose, location } = props;

    console.log(location)

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Location</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            {`lat: ${location?.lat} `}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            {` lont: ${location?.lont} `}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            {` Timexone: ${location?.timezone_id} `}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            {` utc offset: ${location?.utc_offset} `}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default LocationDialog
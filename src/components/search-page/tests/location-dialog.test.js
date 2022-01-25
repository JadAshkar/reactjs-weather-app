import React from 'react'
import { shallow } from 'enzyme'

import LocationDialog from '../location-dialog'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'

describe('open Location Dialog unit tests', () => {
    let locationDialog;
    const mockLocation = {
        lat:1,
        lon:2,
        timezone_id:'A',
        utc_offset:'B',
    }
    const handleCloseMock = jest.fn()


    beforeEach(() => {
        locationDialog = shallow(
            <LocationDialog location={mockLocation} open={true} handleClose={handleCloseMock}/>
        );
    })

    it('open attribute should be true',() => {
        expect(locationDialog.find(Dialog)).toHaveLength(1)
        expect(locationDialog.find(Dialog).at(0).prop('open')).toEqual(true)
    })

    it('should have a dialog title',() => {
        expect(locationDialog.find(DialogTitle)).toHaveLength(1)
        expect(locationDialog.find(DialogTitle).at(0).prop('children')).toEqual('Location')
    })

    it('should have a dialog content',() => {
        expect(locationDialog.find(DialogContent)).toHaveLength(1)
        
    })

    it('should have 4 typographies',() => {
        expect(locationDialog.find(Typography)).toHaveLength(4)
        expect(locationDialog.find(Typography).at(0).prop('children')).toEqual(`lat: ${mockLocation?.lat} `)
        expect(locationDialog.find(Typography).at(1).prop('children')).toEqual(` lont: ${mockLocation?.lont} `)
        expect(locationDialog.find(Typography).at(2).prop('children')).toEqual(` Timexone: ${mockLocation?.timezone_id} `)
        expect(locationDialog.find(Typography).at(3).prop('children')).toEqual(` utc offset: ${mockLocation?.utc_offset} `)
    })

    it('close dialog test',() => {
        locationDialog.find(Dialog).at(0).prop('onClose')()
        expect(handleCloseMock).toHaveBeenCalledTimes(1)
    })

});

describe('close Location Dialog unit tests', () => {
    let locationDialog;



    beforeEach(() => {
        locationDialog = shallow(
            <LocationDialog open={false} />
        );
    })

    it('open attribute should be true',() => {
        expect(locationDialog.find(Dialog)).toHaveLength(1)
        expect(locationDialog.find(Dialog).at(0).prop('open')).toEqual(false)
    })

});
'use strict';
import {expect} from 'chai';

import BusApi from '../../src/server/BusStop/BusApi';

describe('BusStop', () => {

    let tested = null;

    beforeEach(() =>{
        tested = new BusApi();
    })

    describe('As a bus rider approaches a stop', () => {

        const stop = '0001';
        let testResult = null;

        beforeEach(()=> {
            testResult = tested.getCurrentStopInfo(stop);
        });

        it('the application should show what routes use this stop today', () => {
            expect(false).to.be.true();
        })
    });


});


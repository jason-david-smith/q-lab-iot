
import {expect} from 'chai';

import BusApi from '../src/BusApi';

describe('Bus API Service', () =>{
    'use strict';

    let tested = null;

     before(() => {
         tested = new BusApi();
     });

    describe('When I request info for stop 00001', () => {
        let testResult = null;

        before(()=>{
            testResult = tested.getCurrentStopInfo('0001')
        });

        it('should return an object', () => {
            expect(testResult).to.be.a('object');
        });

        it('should return the requested stop id', ()=>{
            expect(testResult.stopId).to.equal('0001');
        });

        it('should return a description of the stop', () => {
            expect(testResult.desc).to.not.be.null;
        })

        it('should supply zero or more routes for the stop', () => {
           expect(testResult.routes).to.be.a('Array');
        });

        it ('should supply zero or more buses using this stop today', () => {
            expect(testResult.transports).to.be.a('Array');
        })
    });
});
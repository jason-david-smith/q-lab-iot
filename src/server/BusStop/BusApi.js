export default class BusApi {

    getCurrentStopInfo (stopKey){
        return {
            'stopId':stopKey,
            'desc':'',
            'routes':[],
            'transports':[]
        };
    }
}
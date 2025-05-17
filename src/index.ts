import { type MvnoRestResponse } from "./types/Api"
const correctResponse = require('./mockData/correctMvnoRestResponse.json')
import mvnoResponseToInternal from "./utils/converters/mvnoResponseToInternal"

const mockRequest = () => {

    // This function mocks a request to the MVNO REST API

    try {
        // fetch and parse json from MVNO API

        const data = correctResponse as MvnoRestResponse

        // parse and validate data with mvnoResponseToInternal converter function

        const internalFormatData = mvnoResponseToInternal(data)

        // Do something appropriate with internalFormatData if it is parsed correctly
        
        console.log(internalFormatData)
    } 

    catch (err) {

        // handle and log error
    
        console.error(err)
    }
}

mockRequest()
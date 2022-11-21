const axios = require("axios")
const appLink = "https://storage.googleapis.com/coding-session-rest-api";

const allAvaiableBusinesses = [
    "GXvPAor1ifNfpF0U5PTG0w",
    "ohGSnJtMIC5nPfYRi_HTAg"
]

const getBusinessDetails = async (placeId) => {
    const url = appLink + `/${placeId}`;
    const businessDetailsResponse = await axios({
        url,
        method: "get",
    });
    if(businessDetailsResponse.status >= 400) throw new Error("Businesses information service temporarly unavaiable")
    
    return businessDetailsResponse.data
}

const getAllBusinessesDetails = async () => {
    return Promise.all(allAvaiableBusinesses.map(getBusinessDetails))
}

module.exports = {
    getAllBusinessesDetails,
    getBusinessDetails
}
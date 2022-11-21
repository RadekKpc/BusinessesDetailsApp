const express = require('express')
const router = express.Router();
const { shapeCompanyData } = require('../shapers/businessesShaper');
const { getAllBusinessesDetails, getBusinessDetails } = require('../services/businessService');

router.get('/api/businesses/all', async function (req, res, next) {
    try {
        const details = await getAllBusinessesDetails();
        const shapedDetails = details.map(shapeCompanyData);
        res.status(200).json(shapedDetails);
    }
    catch (e) {
        console.error("Error occured during obtaining business", e.message)
        res.status(500).send({ message: "Unable to obtain all businesses"})
    }
});

router.get('/api/businesses/:id',  async function (req, res, next) {
    try {
        const id = req.params.id;
        const details = await getBusinessDetails(id);
        const shapedDetails = shapeCompanyData(details);
        res.status(200).json(shapedDetails);
    }
    catch (e) {
        console.error("Error occured during obtaining single business details", e.message)
        res.status(500).send({ message: e.message || "Unable to obtain single business details"})
    }
})

module.exports = router;
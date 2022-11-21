const shapeCompanyData = (data) => ({
    displayedWhat: data.displayed_what,
    displayedWhere: data.displayed_where,
    openingOurs: data.opening_hours,
})

module.exports = { shapeCompanyData }
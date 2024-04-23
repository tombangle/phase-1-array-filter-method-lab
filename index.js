const drivers = [`Bobby`, `Sammy`, `Sally`, `Annette`, `Sarah`, `Bobby`];

function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().includes(query.toLowerCase()));
}
console.log(findMatching(drivers, `Bobby`, `Sammy`));

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
console.log(fuzzyMatch(drivers, `Sa`, `y`, `mm`));

function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name === query);
}
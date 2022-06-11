// Code your solution here
function findMatching(name, drivers) {
    return name.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === drivers.toLowerCase()
    );
}

function fuzzyMatch(name, drivers) {
    return name.filter(
        (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(drivers.toLowerCase()) === 0
    );
}

function matchName(name, soughtDrivers) {
    return name.filter((record) => record.name === soughtDrivers);
}
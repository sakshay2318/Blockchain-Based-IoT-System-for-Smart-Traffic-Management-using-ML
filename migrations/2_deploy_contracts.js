const VehicleTracking = artifacts.require("VehicleTracking");

module.exports = function(deployer) {
    deployer.deploy(VehicleTracking);
};

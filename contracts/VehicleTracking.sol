pragma solidity ^0.5.16;

contract VehicleTracking {
    struct VehicleData {
        uint256 frame;
        string classType;
        uint256 classId;
        uint256 trackerId;
    }

    VehicleData[] public vehicleDataRecords;

    function addVehicleData(uint256 _frame, string memory _classType, uint256 _classId, uint256 _trackerId) public {
        VehicleData memory newData = VehicleData({
            frame: _frame,
            classType: _classType,
            classId: _classId,
            trackerId: _trackerId
        });

        vehicleDataRecords.push(newData);
    }

    function getVehicleData(uint256 index) public view returns (uint256, string memory, uint256, uint256) {
        VehicleData memory data = vehicleDataRecords[index];
        return (data.frame, data.classType, data.classId, data.trackerId);
    }
}

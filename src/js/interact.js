const Web3 = require('web3');
const contract = require('@truffle/contract');
const VehicleTrackingArtifact = require('../../build/contracts/VehicleTracking.json');

// Connect to Ganache
const web3 = new Web3('http://localhost:7545'); // Ganache URL

const VehicleTracking = contract(VehicleTrackingArtifact);
VehicleTracking.setProvider(web3.currentProvider);

const requiredGas = 2000000; // Estimated gas for each transaction

web3.eth.getAccounts().then(async (accounts) => {
    const instance = await VehicleTracking.deployed();

    // Check the balance of the first account
    const balanceWei = await web3.eth.getBalance(accounts[0]);
    const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
    console.log(`Account balance: ${balanceEther} ETH`);

    if (parseFloat(balanceEther) < 1) {
        console.log('Insufficient funds for transactions');
        return;
    }

    // Sample data
    const data = [
        { frame: 0, classType: 'truck', classId: 7, trackerId: 1 },
        { frame: 0, classType: 'car', classId: 2, trackerId: 2}
    ];

    // Add data to blockchain
    for (let i = 0; i < data.length; i++) {
        const record = data[i];
        const receipt = await instance.addVehicleData(record.frame, record.classType, record.classId, record.trackerId, {
            from: accounts[0],
            gas: requiredGas
        });
        console.log('Transaction receipt:', receipt);
    }

    console.log('Data added to blockchain');

    // Retrieve and verify data
    for (let i = 0; i < data.length; i++) {
        const storedData = await instance.getVehicleData(i);
        console.log(`Retrieved Data [${i}]:`, {
            frame: storedData[0].toNumber(),
            classType: storedData[1],
            classId: storedData[2].toNumber(),
            trackerId: storedData[3].toNumber()
        });
    }
}).catch(error => {
    console.error('Error:', error);
});

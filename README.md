# Blockchain-Based IoT System for Smart Traffic Management using ML

The Smart Traffic Management repository provides an innovative system designed to address traffic congestion using a combination of blockchain, IoT, and machine learning technologies. This project integrates advanced tools to offer secure, real-time traffic management solutions.

## Overview

The Smart Traffic Management system combines cutting-edge technologies such as YOLOv8 for vehicle detection and tracking, machine learning algorithms for congestion control, and blockchain for secure data management. The project includes features like real-time vehicle monitoring, congestion analysis, simulation testing, and the automation of traffic signal adjustments via smart contracts. The system aims to optimize traffic flow in urban areas and enhance operational efficiency.

The application supports a user-friendly interface where traffic authorities can monitor traffic in real-time, view congestion analytics, and manage traffic flows through blockchain-secured adjustments.

## Features

- **Real-time Vehicle Tracking**: Uses YOLOv8 and BYTETracker to detect and track vehicles at traffic junctions.
- **Congestion Control Algorithms**: Machine learning-based algorithms analyze traffic patterns and optimize traffic signal timing.
- **Blockchain-Based Data Management**: Ensures secure and tamper-proof management of traffic data using Ethereum smart contracts.
- **Traffic Simulation**: Python-based simulator to test traffic flow scenarios and validate congestion control strategies.
- **Secure Smart Contracts**: Automates traffic adjustments based on real-time vehicle data.

## Getting Started

### Prerequisites

- Python 3.x
- YOLOv8 (Ultralytics)
- Ethereum (Ganache for local blockchain development)
- Flask
- Solidity (for smart contract development)
- Node.js and npm (for smart contract interaction)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sakshay2318/Blockchain-Based-IoT-System-for-Smart-Traffic-Management-using-ML.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Blockchain-Based-IoT-System-for-Smart-Traffic-Management-using-ML
    ```

## Usage

1. Run the pygame simulator application:
    ```bash
    python simuation.py
    ```

2. Access the object_detection.ipynb file for real-time traffic monitoring and analysis.

3. Use the simulator to test congestion control strategies by interacting with the traffic data.

4. Traffic data is stored and retrieved from the blockchain network.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

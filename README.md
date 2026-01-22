# SCH_Assignemts
This repository contains five small backend assignments built using Node.js and Python.
Each assignment is independent and can be run separately.
The focus is on backend logic and API design.

Curl examples are included to test each API.
--------------------------------------------------------------------------------------------------------------------------------------------------

# Assignment 1 – Rule-Based PR Processing (Node.js)
This service processes a Purchase Requisition (PR) by applying business rules defined in a JSON file.

# Run commands:
cd 1-processPr
npm install
npm start

# Postman Curl:
curl --location 'http://localhost:3000/api/processPR' \
--header 'Content-Type: application/json' \
--data '{
  "totalAmount": 78909876,
  "deliveryDays": 1
}'
---------------------------------------------------------------------------------------------------------------------------------------------------

# Assignment 2 - Vendor Spend Reports (Node.js + MongoDB)

Generates vendor-wise purchase order and invoice totals using MongoDB aggregation.

# Run commands:
cd 2-mongo-reports
npm install
npm start

# Postman Curl:
curl --location 'http://localhost:3001/api/vendor-report'
---------------------------------------------------------------------------------------------------------------------------------------------------

# Assignment 3 – PR Description Summarizer (Python)

Summarizes a Purchase Requisition description using a Python microservice.

# Run commands:
cd 3-pr-summariser-python
pip install -r requirements.txt

# Open Python shell to download NLTK resource:
python

# Enter the below commands after >>>
import nltk
nltk.download('punkt')
nltk.download('punkt_tab')
exit()

# To run the server:
uvicorn src.main:src --reload --port 3002

# Postman Curl:
curl --location 'http://127.0.0.1:3002/summarize' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Purchase requisition for 20 laptops for new employees. The devices are required urgently to support onboarding. Delivery should be completed within two days."
}
'
--------------------------------------------------------------------------------------------------------------------------------------------------

# Assignment 4 – Role-Based PR Filtering (Node.js + Redis)

This service returns Purchase Requisitions based on user role and permissions.

Run commands:
cd 4-role-based-filter
npm install
npm start

# Postman Curl:
curl --location 'http://localhost:3003/api/getPRs' \
--header 'Content-Type: application/json' \
--data '{
  "role": "buyer",
  "dataPermissions": {
    "allowedPlants": ["PlantA", "PlantB"],
    "maxAmount": 50000
  }
}'
--------------------------------------------------------------------------------------------------------------------------------------------------

# Assignment 5 – Agent Orchestration (Python)

This service simulates a simple agent execution flow using JSON configuration.

# Run commands:
npm install
npm run dev

# Postman Curl
curl --location 'http://localhost:3004/executeAgentFlow' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Office Laptop",
    "amount": 45000
  }'
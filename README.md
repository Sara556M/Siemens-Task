# Siemens Technical Task – SDET 2025

[![CircleCI](https://circleci.com/gh/Siemens-Automation/Siemens-Task.svg?style=svg)](https://app.circleci.com/pipelines/circleci/5BG2cqNPqzyVashdvxMQwK)

## 📌 Overview

This project contains the technical task for Siemens SDET 2025, including **UI Automation Tests** using **NightwatchJS** and **API Tests** using **Supertest** and **Jest**.  
All tests are executed automatically via **CircleCI pipelines**.

---

## 📁 Repository Structure
Siemens-Task/
│
├── ui-tests/ # Contains UI automation tests using NightwatchJS
│ └── tests_output/ # Contains Nightwatch HTML test report
│
├── api-tests/ # Contains API automation tests using Supertest & Jest
│
└── .circleci/ # CircleCI configuration file (config.yml)
## 🚀 UI Automation – NightwatchJS

Tested on: [http://automationpractice.multiformis.com](http://automationpractice.multiformis.com)

### ✅ Covered Scenarios:

#### 🔹 Contact Us Page

- Valid form submission
- Missing required fields (subject, email, message)
- Invalid email format
- Uploading files (valid and invalid formats)

#### 🔹 Homepage

- Search for the word "dress" and verify the returned results

### 📄 HTML Test Report:
The report is automatically generated under:
ui-tests/tests_output/nightwatch-html-report/index.html
## 🧪 API Automation – mock-user-auth (Supertest + Jest)

Tested using [mock-user-auth npm module](https://www.npmjs.com/package/mock-user-auth)

### ✅ Covered Scenarios:

- Register user with valid and invalid data
- Authenticate user with correct and incorrect credentials
- Get user details using token
- Update user data
- Admin-only: delete all users with/without proper key

### 📄 API Report:
Tests executed via Jest CLI – results printed to terminal or exported via a custom reporter if needed.

---

## 📝 Test Case Titles

### ✅ UI Test Cases – Contact Us Page

| ID        | Test Case Title |
|-----------|------------------|
| TC_CU_01  | Valid Form Submission |
| TC_CU_02  | Missing Subject Heading |
| TC_CU_03  | Missing Email Address |
| TC_CU_04  | Invalid Email Format |
| TC_CU_05  | Missing Message Body |
| TC_CU_06  | Upload Valid File Only |
| TC_CU_07  | Upload Invalid File Type |
| TC_CU_08  | Required Fields Only |

### ✅ UI Test Case – Homepage Search

| ID        | Test Case Title |
|-----------|------------------|
| TC_HP_01  | Search for “dress” and Verify Result Count and Relevance |

### ✅ API Test Cases – Auth & User Routes

| ID         | Test Case Title |
|------------|------------------|
| TC_API_01  | Register User Successfully |
| TC_API_02  | Fail to Register User with Missing Fields |
| TC_API_03  | Fail Registration with Invalid Email |
| TC_API_04  | Fail Registration with Short Password |
| TC_API_05  | Authenticate and Return Token |
| TC_API_06  | Fail Authentication with Wrong Credentials |
| TC_API_07  | Get User Info with Valid Token |
| TC_API_08  | Update User Info with Valid Token |
| TC_API_09  | Re-authenticate After Update and Get New Token |
| TC_API_10  | Get User After Re-authentication |
| TC_API_11  | Fail to Delete All Users with Wrong Admin Key |
| TC_API_12  | Delete All Users with Correct Admin Key |

---

## 🪲 Reported Bugs

All identified bugs (UI + API) are documented and available here:  
📎 [Bug Reports & Test Cases Folder (Google Drive)](https://drive.google.com/drive/u/0/folders/1ET7xyBDdxSwWtfM0GU5yxYt8mZWrqhZK)

---

## 🔁 CI/CD – CircleCI Integration

- ✅ CI is configured to run:
  1. UI Tests via NightwatchJS
  2. API Tests via Jest + Supertest
- 📄 Config File: `.circleci/config.yml`
- 🟢 Status badge added at the top of this README
- All tests run automatically on every push to the `main` branch

## 📤 Submission Instructions

- All deliverables are pushed to this public GitHub repository
- Test reports, bugs, and documentation are shared via Google Drive
- CI/CD pipeline is active and passing on CircleCI
- Ready for demo and code walkthrough

---

## 👩‍💻 Author

**Sara Ramadan**  
SDET Candidate – Siemens 2025  
📧 sararamadan20005@gmail.com

---

# Siemens Technical Task – SDET 2025

## CI/CD Pipeline Status

[![CircleCI](https://circleci.com/gh/Siemens-Automation/Siemens-Task.svg?style=svg)](https://app.circleci.com/pipelines/circleci/5BG2cqNPqzyVashdvxMQwK)

---
## 📌 Overview

This project presents the solution to the Siemens SDET 2025 technical task, covering both **UI Automation Testing** using NightwatchJS and **API Testing** using Supertest and Jest. The project is fully integrated with **CircleCI** for automated testing workflows.

---

---

## 📁 Project Structure

Siemens-Task/
- ui-tests(UI Automation Testing using NightwatchJS)**
  - tests(Test cases for Contact Form & Homepage Search)
  - page-objects(Page Object Model files selectors)
  - tests_output(HTML reports generated after UI test execution)
- **api-tests(API Automation Testing using Supertest & Jest)**
  - tests(Test cases for Auth and User routes)
  - tests_output(Output logs or test reports)
- **.circleci**
  - config.yml(CircleCI pipeline configuration)
  
---    
## 🚀 UI Automation – NightwatchJS

🔗 Tested on: [http://automationpractice.multiformis.com](http://automationpractice.multiformis.com)

**Scenarios Covered:**
- **Contact Us Form**
  - Valid form submission
  - Missing required fields: Subject Heading, Email, Message
  - Invalid email format
  - File upload tests (valid/invalid)
- **Homepage Search**
  - Search for the term "dress" and validate result relevance

✅ **Implementation Notes:**
- Uses **Page Object Model (POM)** for clean and reusable selectors.
- Runs in **headless Chrome** using CircleCI.
- HTML test report generated at:
  ui-tests/tests_output/nightwatch-html-report/index.html

---

## 🧪 API Automation – Supertest + Jest

🔗 Based on: [mock-user-auth npm module](https://www.npmjs.com/package/mock-user-auth)

**Scenarios Covered:**
- Register user with:
- Valid data
- Missing fields ❌
- Invalid email ❌
- Short password ❌
- Authenticate with:
- Correct credentials
- Wrong credentials
- Get and update user details
- Admin-only delete all users (with/without proper key)

❗ **Note:** 3 test cases failed due to actual issues in the mock-user-auth module:
- `TC_API_02` – Missing fields
- `TC_API_03` – Invalid email
- `TC_API_04` – Short password

✅ **Execution:** 
- Tests run using `jest`
- HTML test report generated at:
  api-tests/reports/test-report
- CI logs provide visibility for test outcomes

---
## 📝 Test Case Titles

### ✅ UI Test Cases – Contact Us
| ID        | Title                             |
|-----------|------------------------------------|
| TC_CU_01  | Valid Form Submission              |
| TC_CU_02  | Missing Subject Heading            |
| TC_CU_03  | Missing Email Address              |
| TC_CU_04  | Invalid Email Format               |
| TC_CU_05  | Missing Message Body               |
| TC_CU_06  | Upload Valid File Only             |
| TC_CU_07  | Upload Invalid File Type           |
| TC_CU_08  | Required Fields Only               |

### ✅ UI Test Case – Homepage
| ID        | Title                                             |
|-----------|--------------------------------------------------|
| TC_HP_01  | Search for "dress" and verify results            |

### ✅ API Test Cases – Auth & User Routes
| ID         | Title                                          |
|------------|------------------------------------------------|
| TC_API_01  | Register User Successfully                     |
| TC_API_02  | Fail to Register User with Missing Fields ❌    |
| TC_API_03  | Fail Registration with Invalid Email ❌         |
| TC_API_04  | Fail Registration with Short Password ❌        |
| TC_API_05  | Authenticate and Return Token                  |
| TC_API_06  | Fail Authentication with Wrong Credentials     |
| TC_API_07  | Get User Info with Valid Token                 |
| TC_API_08  | Update User Info with Valid Token              |
| TC_API_09  | Re-authenticate After Update and Get New Token |
| TC_API_10  | Get User After Re-authentication               |
| TC_API_11  | Fail to Delete All Users with Wrong Admin Key  |
| TC_API_12  | Delete All Users with Correct Admin Key        |

---

## 🪲 Manual Test Cases & Bug Reports

📂 A separate document contains:
- Full test case documentation (manual)
- All reported UI and API bugs
- Bug reports use a structured format

📎 Access all documentation on Google Drive:

🔗 [Manual Test Cases & Bug Reports](https://drive.google.com/drive/u/0/folders/1ET7xyBDdxSwWtfM0GU5yxYt8mZWrqhZK)

---
## 🔁 CI/CD Integration – CircleCI

CI/CD is implemented using **CircleCI**, which:
- Installs project dependencies
- Runs UI tests in headless Chrome
- Runs API tests via Jest

🛠️ Config file: `.circleci/config.yml`  
🔗 CircleCI Dashboard: [![CircleCI](https://circleci.com/gh/Siemens-Automation/Siemens-Task.svg?style=svg)](https://app.circleci.com/pipelines/circleci/5BG2cqNPqzyVashdvxMQwK)

🟢 Pipeline automatically runs on every `push` to `main` branch  

---
## 📤 Submission Deliverables

- ✅ GitHub repo with public access: [Siemens-Task](https://github.com/Sara556M/Siemens-Task)
- ✅ NightwatchJS & Supertest code organized in UI/API folders
- ✅ HTML reports for both UI and API tests
- ✅ Google Drive folder with manual test cases and bug tickets for both UI and API
- ✅ CI/CD configured with CircleCI

---

## 👩‍💻 Author

**Sara Ramadan**  
SDET Candidate – Siemens 2025  
📧 sararamadan20005@gmail.com

---
---

## 🚀 UI Automation – NightwatchJS

🔗 Tested on: [http://automationpractice.multiformis.com](http://automationpractice.multiformis.com)

**Scenarios Covered:**
- **Contact Us Form**
  - Valid form submission
  - Missing required fields: Subject Heading, Email, Message
  - Invalid email format
  - File upload tests (valid/invalid)
- **Homepage Search**
  - Search for the term "dress" and validate result relevance

✅ **Implementation Notes:**
- Uses **Page Object Model (POM)** for clean and reusable selectors.
- Runs in **headless Chrome** using CircleCI.
- HTML test report generated at:
- ui-tests/tests_output/nightwatch-html-report/index.html

---

## 🧪 API Automation – Supertest + Jest

🔗 Based on: [mock-user-auth npm module](https://www.npmjs.com/package/mock-user-auth)

**Scenarios Covered:**
- Register user with:
- Valid data
- Missing fields ❌
- Invalid email ❌
- Short password ❌
- Authenticate with:
- Correct credentials
- Wrong credentials
- Get and update user details
- Admin-only delete all users (with/without proper key)

❗ **Note:** 3 test cases failed due to actual issues in the mock-user-auth module:
- `TC_API_02` – Missing fields
- `TC_API_03` – Invalid email
- `TC_API_04` – Short password

✅ **Execution:** 
- Tests run using `jest`
- HTML test report generated at:
- api-tests/reports/test-report
- CI logs provide visibility for test outcomes

---
## 📝 Test Case Titles

### ✅ UI Test Cases – Contact Us
| ID        | Title                             |
|-----------|------------------------------------|
| TC_CU_01  | Valid Form Submission              |
| TC_CU_02  | Missing Subject Heading            |
| TC_CU_03  | Missing Email Address              |
| TC_CU_04  | Invalid Email Format               |
| TC_CU_05  | Missing Message Body               |
| TC_CU_06  | Upload Valid File Only             |
| TC_CU_07  | Upload Invalid File Type           |
| TC_CU_08  | Required Fields Only               |

### ✅ UI Test Case – Homepage
| ID        | Title                                             |
|-----------|--------------------------------------------------|
| TC_HP_01  | Search for "dress" and verify results            |

### ✅ API Test Cases – Auth & User Routes
| ID         | Title                                          |
|------------|------------------------------------------------|
| TC_API_01  | Register User Successfully                     |
| TC_API_02  | Fail to Register User with Missing Fields ❌    |
| TC_API_03  | Fail Registration with Invalid Email ❌         |
| TC_API_04  | Fail Registration with Short Password ❌        |
| TC_API_05  | Authenticate and Return Token                  |
| TC_API_06  | Fail Authentication with Wrong Credentials     |
| TC_API_07  | Get User Info with Valid Token                 |
| TC_API_08  | Update User Info with Valid Token              |
| TC_API_09  | Re-authenticate After Update and Get New Token |
| TC_API_10  | Get User After Re-authentication               |
| TC_API_11  | Fail to Delete All Users with Wrong Admin Key  |
| TC_API_12  | Delete All Users with Correct Admin Key        |

---

## 🪲 Manual Test Cases & Bug Reports

📂 A separate document contains:
- Full test case documentation (manual)
- All reported UI and API bugs
- Bug reports use a structured format
  
📎 Access all documentation on Google Drive:  
🔗 [Manual Test Cases & Bug Reports](https://drive.google.com/drive/u/0/folders/1ET7xyBDdxSwWtfM0GU5yxYt8mZWrqhZK)

---
## 🔁 CI/CD Integration – CircleCI

CI/CD is implemented using **CircleCI**, which:
- Installs project dependencies
- Runs UI tests in headless Chrome
- Runs API tests via Jest

🛠️ Config file: `.circleci/config.yml`  
🔗 CircleCI Dashboard: [![CircleCI](https://circleci.com/gh/Siemens-Automation/Siemens-Task.svg?style=svg)](https://app.circleci.com/pipelines/circleci/5BG2cqNPqzyVashdvxMQwK)

🟢 Pipeline automatically runs on every `push` to `main` branch  

---
## 📤 Submission Deliverables

- ✅ GitHub repo with public access: [Siemens-Task](https://github.com/Sara556M/Siemens-Task)
- ✅ NightwatchJS & Supertest code organized in UI/API folders
- ✅ HTML reports for both UI and API tests
- ✅ Google Drive folder with manual test cases and bug tickets for both UI and API
- ✅ CI/CD configured with CircleCI

---

## 👩‍💻 Author

**Sara Ramadan**  
SDET Candidate – Siemens 2025  
📧 sararamadan20005@gmail.com

---

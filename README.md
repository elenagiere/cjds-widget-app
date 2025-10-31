# cjds-widget-app

Standalone CJDS widget App

### Required Node Version

`nvm use 16.13.1`

### Framework

`Preact`

### Local Startup

1. `nvm use 16.13.1`
2. `npm install`
3. Duplicate `.env.example` file and rename as `.env`
4. Populate the .env file with the values
5. `npm run dev:watch`

## Env Variable Guide

1. DATA_CENTER

- "devus1"
- "loadus1"
- "qaus1"
- "produs1" or other prod DC data centers

2. BEARER TOKEN

- Navigate to the Dev Portal (based on your chosen environment) and log in with your **agent** credentials
- NON-PROD API DEV PORTAL:

https://developer-portal-intb.ciscospark.com/webex-contact-center/docs/api/v1/customer-identification

- PROD API DEV PORTAL:

https://developer.webex.com/webex-contact-center/docs/api/v1/customer-identification 3. ORGANIZATION_ID

- Please use the Organization ID that you have onboarded for CJDS

4. PROJECT_ID

- Log into Control Hub and collect the Project Id you have activated with WXCC

5. TEMPLATE_ID **(optional)**

- By default, the widget will use a default profile template.
- If you would like to use a custom profile template, create one using our APIs and plug in the "template-id"

6. IDENTITY

- This is where you will pass in the customer's identity (ex. johndoe@gmail.com or +16303030024)

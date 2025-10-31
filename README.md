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

## Key CJDS Widget Dependencies
1. `index.html`: Add the following code to the <head> section of your root index.html file
```
    <script src="https://journey-widget.webex.com/finesse/customer-journey.js"></script>
    <script src="https://journey-widget.webex.com/finesse/customer-journey-wrapper.js"></script>
    <script src="https://journey-widget.webex.com/finesse/customer-journey-bootstrap.js"></script>

    <link rel="stylesheet" href="https://journey-widget.webex.com/finesse/css/momentum-ui.min.css" />
    <link rel="stylesheet" href="https://journey-widget.webex.com/finesse/css/momentum-ui-icons.min.css" />

    <script>
        let AGENTX_SERVICE = {};
    </script>

    <!-- Load your widget bundle -->
    <script type="module" src="https://journey-widget.webex.com"></script>
```
2. `package.json`: Ensure you have the following npm packages in your package.json
```
  "devDependencies": {
    "@momentum-ui/core": "19.16.0",
    "@momentum-ui/icons": "8.28.5",
    "@momentum-ui/utils": "6.2.15",
    "@momentum-ui/web-components": "2.23.16",
    "@preact/preset-vite": "^2.10.2",
    "mobx": "^6.0.1",
    "vite": "^4.5.3"
  }
```
3. `app.jsx`: In your main javascript file, ensure you are importing the momentum-ui/web-components. Add pass in required variables into the <customer-journey-widget>.
```
import "@momentum-ui/web-components";
```
CJDS variables passed in
```
<customer-journey-widget
                condensed-view
                show-alias-icon
                use-new-momentum-icons
                is-visual-rebrand-enabled
                is-momentum-v2-enabled
                bearerToken={bearerToken}
                organizationId={organizationId}
                projectId={projectId}
                templateId={templateId}
                dataCenter={dataCenter}
                interactionData={mockedInteractionData("INBOUND", identity)}>
</customer-journey-widget>
```
4. `app.css`: Make sure the md-theme and div containers around the widget have proper height and widths
```
#app {
    height: 88vh;
    padding: 1rem;
}

md-theme {
    width: 100%;
    height: 100%;
}

.widget-container {
    border: 1px solid #ccc;
    height: 100%;
}
```

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

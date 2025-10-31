import { useState } from 'preact/hooks'
import './styles/app.css';
import { mockedInteractionData } from './assets/interaction.mock';
import "@momentum-ui/web-components";

export function App() {
  const bearerToken = import.meta.env.VITE_BEARER_TOKEN;
  const organizationId = import.meta.env.VITE_ORGANIZATION_ID;
  const identity = import.meta.env.VITE_IDENTITY;
  const dataCenter = import.meta.env.VITE_DATA_CENTER;

  const projectId = import.meta.env.VITE_PROJECT_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;

  const [count, setCount] = useState(0)

  return (
    <>
    <h1>CJDS Widget App</h1>
      <md-theme theme="momentumV2">
        <div class="widget-container">
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
        </div>
      </md-theme>
    </>
  )
}

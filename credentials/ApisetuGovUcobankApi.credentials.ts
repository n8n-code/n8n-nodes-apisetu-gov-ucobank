import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovUcobankApi implements ICredentialType {
        name = 'N8nDevApisetuGovUcobankApi';

        displayName = 'Apisetu Gov Ucobank API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovUcobank/apisetu-gov-ucobank.svg', dark: 'file:../nodes/ApisetuGovUcobank/apisetu-gov-ucobank.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/ucobank/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/ucobank/v3',
                        description: 'The base URL of your Apisetu Gov Ucobank API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}

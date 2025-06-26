# Node.js HTTP Trigger Function App

This is a Node.js Azure Functions application with an HTTP trigger using the v4 programming model.

## Project Structure

```
├── package.json              # Node.js dependencies and scripts
├── host.json                 # Function app configuration
├── local.settings.json       # Local development settings
├── src/
│   └── functions/
│       └── httpTrigger.js    # HTTP trigger function
└── README.md                 # This file
```

## Features

- **HTTP Trigger Function**: Responds to GET and POST requests
- **Anonymous Authentication**: No authentication required for testing
- **JSON Response**: Returns structured JSON responses
- **Query Parameter Support**: Accepts `name` parameter via query string or request body
- **Logging**: Built-in Azure Functions logging

## Prerequisites

- Node.js 18.x or later
- Azure Functions Core Tools v4
- Azure Storage Emulator (for local development)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Azure Functions Core Tools globally (if not already installed):
```bash
npm install -g azure-functions-core-tools@4 --unsafe-perm true
```

## Local Development

1. Start the Azure Storage Emulator or use Azurite
2. Run the function app locally:
```bash
npm start
```

The function will be available at: `http://localhost:7071/api/httpTrigger`

## Testing the Function

### GET Request
```bash
curl "http://localhost:7071/api/httpTrigger?name=YourName"
```

### POST Request
```bash
curl -X POST "http://localhost:7071/api/httpTrigger" -d "YourName" -H "Content-Type: text/plain"
```

## Response Format

The function returns a JSON response with the following structure:
```json
{
  "message": "Hello, YourName! This HTTP triggered function executed successfully.",
  "timestamp": "2025-06-26T...",
  "method": "GET",
  "url": "http://localhost:7071/api/httpTrigger?name=YourName"
}
```

## Deployment

To deploy to Azure:

1. Create a Function App in Azure
2. Deploy using Azure Functions Core Tools:
```bash
func azure functionapp publish <your-function-app-name>
```

## Configuration

- **Authentication Level**: Set to `anonymous` for easy testing. Change to `function` or `admin` for production
- **HTTP Methods**: Supports both GET and POST methods
- **CORS**: Configured to allow all origins in local development
- **Timeout**: Set to 5 minutes in host.json

## Best Practices

- Uses Azure Functions v4 programming model
- No function.json files needed (handled by the framework)
- Extension bundles for simplified dependency management
- Proper error handling and logging
- JSON response format for API consistency
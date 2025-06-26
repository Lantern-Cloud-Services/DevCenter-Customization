const { app } = require('@azure/functions');

app.http('httpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'World';
        
        const responseBody = {
            message: `Hello, ${name}! This HTTP triggered function executed successfully.`,
            timestamp: new Date().toISOString(),
            method: request.method,
            url: request.url
        };

        return { 
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(responseBody, null, 2)
        };
    }
});

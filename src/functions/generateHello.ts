import * as df from 'durable-functions';
import { app, HttpHandler, HttpRequest, HttpResponse, InvocationContext } from '@azure/functions';

const generateHello: HttpHandler = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponse> => {
    const client = df.getClient(context);
    // const body: unknown = await request.text();
    console.log(request);
    const instanceId: string = await client.startNew('helloOrchestrator', { input: request.body });
    // const instanceId: string = await client.startNew(request.params.orchestratorName, { input: body });

    context.log(`Started orchestration with ID = '${instanceId}'.`);

    return client.createCheckStatusResponse(request, instanceId);
};

// app.http('generateHello', {
app.post('generateHello', {
    // methods: ['POST'],
    route: 'hello',
    // route: 'orchestrators/{orchestratorName}',
    extraInputs: [df.input.durableClient()],
    handler: generateHello,
});
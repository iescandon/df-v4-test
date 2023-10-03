import * as df from 'durable-functions';
import { OrchestrationContext, OrchestrationHandler, Task } from 'durable-functions';

const activityName = 'durableHello';

interface HelloRequest {
    name: string;
}

const helloOrchestrator: OrchestrationHandler = function* (context: OrchestrationContext) {
    const request: HelloRequest = context.df.getInput();

    const outputs: Task[] = [];

    outputs.push(context.df.callActivity(activityName, 'Tokyo'));
    outputs.push(context.df.callActivity(activityName, 'Seattle'));
    outputs.push(context.df.callActivity(activityName, 'Cairo'));
    outputs.push(context.df.callActivity(activityName, request.name));

    const result = yield context.df.Task.all(outputs)

    return result;
};

df.app.orchestration('helloOrchestrator', helloOrchestrator);


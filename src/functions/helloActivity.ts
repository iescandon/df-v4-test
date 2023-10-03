import * as df from 'durable-functions';
import { ActivityHandler } from 'durable-functions';

const durableHello: ActivityHandler = (input: string): string => {
    return `Hello, ${input}`;
};
df.app.activity('durableHello', { handler: durableHello });
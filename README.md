# df-v4-test

## Requirements
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Brew](https://brew.sh/) (if using MacOS)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Node.js 18](https://nodejs.org/en/download/current)
- [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Cisolated-process%2Cnode-v4%2Cpython-v2%2Chttp-trigger%2Ccontainer-apps&pivots=programming-language-typescript)
- [Postman](https://www.postman.com/downloads/) 

## Local Setup
1. Download the following extensions for VSCode
  - [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)
  - [Azurite](https://marketplace.visualstudio.com/items?itemName=Azurite.azurite)

2. Add `local.settings.json` file
```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsFeatureFlags": "EnableWorkerIndexing"
  }
}
```

3. Run `yarn install` to add all dependencies in package.json

## Run App Locally
Before running your app locally, you need to run the storage emulator.
1. Select Azure Icon in activity bar on the left in your VSCode window.
2. Select Attached Storage Accounts
3. Select Local Emulator
4. Select Blob Containers, Queues, and Tables
5. Under each one, click Start

Once you have the storage emulator running, you can run `yarn start` to get the app running.

## Postman
Make a **POST** request to `http://localhost:7071/api/hello`

Example request body:
```
{
    "name": "Jonah"
}
```

Example response:
```
{
    "id": "b9614b54ebba42039d9549d862810223",
    "statusQueryGetUri": "http://localhost:7071/runtime/webhooks/durabletask/instances/b9614b54ebba42039d9549d862810223?taskHub=TestHubName&connection=Storage&code=tTORLBOAUHGq2njI_CdhXu_nSkpWkLY9uiYne6MwrsJ3AzFugZWrdw==",
    "sendEventPostUri": "http://localhost:7071/runtime/webhooks/durabletask/instances/b9614b54ebba42039d9549d862810223/raiseEvent/{eventName}?taskHub=TestHubName&connection=Storage&code=tTORLBOAUHGq2njI_CdhXu_nSkpWkLY9uiYne6MwrsJ3AzFugZWrdw==",
    "terminatePostUri": "http://localhost:7071/runtime/webhooks/durabletask/instances/b9614b54ebba42039d9549d862810223/terminate?reason={text}&taskHub=TestHubName&connection=Storage&code=tTORLBOAUHGq2njI_CdhXu_nSkpWkLY9uiYne6MwrsJ3AzFugZWrdw==",
    "rewindPostUri": "http://localhost:7071/runtime/webhooks/durabletask/instances/b9614b54ebba42039d9549d862810223/rewind?reason={text}&taskHub=TestHubName&connection=Storage&code=tTORLBOAUHGq2njI_CdhXu_nSkpWkLY9uiYne6MwrsJ3AzFugZWrdw==",
    "purgeHistoryDeleteUri": "http://localhost:7071/runtime/webhooks/durabletask/instances/b9614b54ebba42039d9549d862810223?taskHub=TestHubName&connection=Storage&code=tTORLBOAUHGq2njI_CdhXu_nSkpWkLY9uiYne6MwrsJ3AzFugZWrdw==",
    "restartPostUri": "http://localhost:7071/runtime/webhooks/durabletask/instances/b9614b54ebba42039d9549d862810223/restart?taskHub=TestHubName&connection=Storage&code=tTORLBOAUHGq2njI_CdhXu_nSkpWkLY9uiYne6MwrsJ3AzFugZWrdw==",
    "suspendPostUri": "http://localhost:7071/runtime/webhooks/durabletask/instances/b9614b54ebba42039d9549d862810223/suspend?reason={text}&taskHub=TestHubName&connection=Storage&code=tTORLBOAUHGq2njI_CdhXu_nSkpWkLY9uiYne6MwrsJ3AzFugZWrdw==",
    "resumePostUri": "http://localhost:7071/runtime/webhooks/durabletask/instances/b9614b54ebba42039d9549d862810223/resume?reason={text}&taskHub=TestHubName&connection=Storage&code=tTORLBOAUHGq2njI_CdhXu_nSkpWkLY9uiYne6MwrsJ3AzFugZWrdw=="
}
```

Make a **GET** request to the `statusQueryGetUri`

Example response:
```
{
    "name": "helloOrchestrator",
    "instanceId": "b9614b54ebba42039d9549d862810223",
    "runtimeStatus": "Completed",
    "input": {
        "name": "Inez"
    },
    "customStatus": null,
    "output": [
        "Hello, Tokyo",
        "Hello, Seattle",
        "Hello, Cairo",
        "Hello, Inez"
    ],
    "createdTime": "2023-10-04T01:33:51Z",
    "lastUpdatedTime": "2023-10-04T01:33:52Z"
}
```
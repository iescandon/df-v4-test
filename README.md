# df-v4-test

## Install
- Visual Studio Code
    extensions
    - azure tools
    - azurite
- Brew (MacOS)
- Yarn
- Node.js 18.x+
- [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Cisolated-process%2Cnode-v4%2Cpython-v2%2Chttp-trigger%2Ccontainer-apps&pivots=programming-language-typescript) version v4.0.5382 or above
- Postman

## Local Setup
Add `local.settings.json` file
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

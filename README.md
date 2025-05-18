# Telgea Code Test

## Architecture & Approach

The REST converter function created takes an object of type MvnoRestResponse as argument, and uses Zod to validate the data. The validation schema assumes all values are mandatory.

If validation fails, Zod throws an error that is preferably handled in a try/catch block in the API-request function.

If the data passes validation it is manually mapped to an object that is then returned from the function.

Unit tests are created using Jest.

In index.ts you will find a simple function mocking an api-request that will show how the converter function can be used.

## Folder Structure

The REST converter function created can be found in src/utils/converters, along with its unit test file.

Everything else in the folder structure should be self explanatory.

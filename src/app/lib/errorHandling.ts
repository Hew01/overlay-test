import { isOsuJSError } from "osu-web.js";

export async function errorHandling(error: unknown) {

if (isOsuJSError(error))
    {
    if (error.type === 'invalid_json_syntax') {
      console.error('Error while parsing response as JSON');
    } else if (error.type === 'network_error') {
      console.error('Network error');
    } else if (error.type === 'unexpected_response') {
      const response = error.response(); // Type: `Response`
      console.error('Unexpected response');
      console.log(`Details: ${response.status} - ${response.statusText}`);
      console.log('JSON: ', await response.json());
    }}
    else console.log(error);
}
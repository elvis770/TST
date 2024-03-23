// Error defined in the Network response
let error_response = `{
    "resultCode": 400,
    "resultMessage": "Error in Commerce Tools. Response: {\\\"statusCode\\\":400,\\\"message\\\":\\\"The discount code 'test' was not found.\\\",\\\"errors\\\":[{\\\"code\\\":\\\"DiscountCodeNonApplicable\\\",\\\"message\\\":\\\"The discount code 'test' was not found.\\\",\\\"action\\\":{\\\"action\\\":\\\"addDiscountCode\\\",\\\"code\\\":\\\"test\\\"},\\\"actionIndex\\\":1,\\\"reason\\\":\\\"DoesNotExist\\\",\\\"discountCode\\\":\\\"test\\\"}]}"
}`;

// Parse the error response as JSON
let error_data = JSON.parse(error_response);
let error_message = error_data.resultMessage;

// Function to handle error and provide assistance
function handle_error(error_message) {
    if (error_message.includes("DiscountCodeNonApplicable")) {
        return "We're sorry, but the discount code you entered is not valid. Please double-check the code and try again.";
    } else {
        return "An unexpected error occurred. Please try again later or contact customer support for assistance.";
    }
}

// Handle error and provide assistance
let assistance_message = handle_error(error_message);
console.log(assistance_message);



exports.handler = async (event) => {
    console.log(event);
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify(event),
    };
    return response;
};

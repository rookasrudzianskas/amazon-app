const stripe = require('stripe')('sk_test_51JdAM1HPTF8FvliL7HaObPB6TM2C3Tw9rpibIpnt81wQunc31G4HLMsDH1Pt0tNCZSuJclza3eMo1j6tnlZN24ez00hDVYAP2z');

// event
// {
//   "typeName": "Query" | "Mutation", /* Filled dynamically based on @function usage location */
//   "fieldName": "createPaymentMethod", /* Filled dynamically based on @function usage location */
//   "arguments": { amount  /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }

exports.handler = async (event) => {
    const { typeName, arguments } = event;

    if(typeName !== 'Mutation') {
        throw new Error("Request is not the mutation");
    }

    if(!arguments?.amount) {
        throw new Error('Amount is required');
    }

    // create payment intent
    // create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: arguments.amount,
        currency: 'usd'
    });

    return {
        clientSecret: paymentIntent.client_secret,
    }

};

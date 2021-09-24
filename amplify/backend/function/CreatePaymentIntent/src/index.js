

exports.handler = async (event) => {
    const { typeName, arguments } = event;

    if(typeName !== 'Mutation') {
        throw new Error("Request is not the mutation");
    }

    if(!arguments?.amount) {
        throw new Error('Amount is required');
    }


};

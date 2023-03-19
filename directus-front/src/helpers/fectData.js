const graphQLAPI = process.env.REACT_APP_GRAPHQL


// funcion asincrona que hace un fetch a directus con graphql
const fetchData = async (query, {variables = {}}) => {

    const headers = { 'Content-Type': 'application/json' };

    const res = await fetch(graphQLAPI,{

        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })

    });

    console.log('Query: ',JSON.stringify(query,variables));

    const json = await res.json();

    if(json.erros){
        throw new Error(json.errors);
    }

    return json;
}

export default fetchData;
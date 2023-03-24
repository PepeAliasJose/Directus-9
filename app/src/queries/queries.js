import fetchData from "../helpers/fectData";


//Genera la url de la query de graphql
export const  getHomepagePosts = async () => {

    const data = await fetchData(
        //Si la query falla se puede ver por que desde el f12 y mostrando el json del error
        `query HomepagePosts{posts { id title slug featured_image{ id } body } }`,
        { variables:{} }
    );

    return data.data.posts;

}

export const  getProducts = async () => {

    const data = await fetchData(
        //Si la query falla se puede ver por que desde el f12 y mostrando el json del error
        `query Products{products { id product_name slug product_image{ id } price product_description product_categories{ categories_id{id category_name}} } }`,
        { variables:{} }
    );

    return data.data.products;

}

export const  getCategories = async () => {

    const data = await fetchData(
        //Si la query falla se puede ver por que desde el f12 y mostrando el json del error
        `query Categories{categories { id category_name } }`,
        { variables:{} }
    );

    return data.data.categories;

}

export const  getProductsFilter = async () => {

    const data = await fetchData(
        //Si la query falla se puede ver por que desde el f12 y mostrando el json del error
        `query Products{products(filter:{product_categories:{categories_id:{id:{_eq: 1}}}}) 
            { id product_name slug product_image{ id } 
            price product_description product_categories{ categories_id{id category_name}} } }`,
        { variables:{} }
    );

    return data.data.products;

}
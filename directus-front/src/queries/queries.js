import fetchData from "../helpers/fectData";


//Genera la url de la query de graphql
export const  getHomepagePosts = async () => {

    const data = await fetchData(
        `query HomepagePosts{posts { id title slug featured_image{ id } body } }`,
        { variables:{} }
    );

    return data.data.posts;

}
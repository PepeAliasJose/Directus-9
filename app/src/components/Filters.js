import Checkbox from "./Checkbox";

export default function Filters({categories,getSelectedCategories}){

    // console.log('categorias: ',categories);

    return(
        <div>
            { categories.map(category => <Checkbox getSelectedCategories={getSelectedCategories} key={category.id} label={category.category_name} id={category.id}/> )}
        </div>
    )

}
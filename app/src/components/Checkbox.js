export default function Checkbox({label,id,getSelectedCategories}){

    return(
        <div>
            <input onChange={() => getSelectedCategories(+id)} type="checkbox" value={id} /><span >{label}</span>
        </div>
    )

}
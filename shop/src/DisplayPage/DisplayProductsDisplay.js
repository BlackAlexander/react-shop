import {returnInitialItems} from './DisplayAuxJS';

export default function ProductsDisplay({fetchUrl}){
    if (String(fetchUrl.slice(0,4)) !== "http"){
        return (<> </>)
    }
    const itemsList = returnInitialItems(fetchUrl);
    return(
        <>
            <div className="products-display" id="list-of-products">
                {itemsList}
            </div>
        </>
    )
}

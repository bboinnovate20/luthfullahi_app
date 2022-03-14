import AppText from "../components/AppText";
import ContentListings from "../components/ContentListings";
import { luthResource } from "../data/luthresource";

export default function AppLuthResources() {
    

    return (
        <ContentListings 
            data={luthResource}
            name='name'
            headerName='Luthfullahi Resources'
            
        />
    )
}
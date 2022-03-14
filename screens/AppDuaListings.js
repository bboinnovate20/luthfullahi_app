import react from "react";
import { View, Text } from "react-native";
import ContentListings from "../components/ContentListings";
import { duaContent } from "../data/duas";
export default function AppDuaListings({navigation, route}) {
 
    return (
        <ContentListings data={route.params.listings}  
        headerName={route.params.name} 
        navigate="DuaContent"
        name="content"
        />
    )
}
import AppText from "../components/AppText";


import Content from '../components/Content'
import { fiqhuContent } from "../data/fiqhu";

export default function  AppFiqhuContent({route}) {


    function findContent (level, id) {
       const _level = fiqhuContent.find((fiqhu) => fiqhu.level === level).subtopic

       return  _level.find((fq) => fq.id === id).content

    }

    return (
        <Content headerName={route.params.name} imageInclude={false} 
            data={findContent(route.params.level, route.params.id)}
        />

    )
}
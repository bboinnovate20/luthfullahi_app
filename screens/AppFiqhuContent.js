import AppText from "../components/AppText";


import Content from '../components/Content'
import { content } from "../data/fiqhu";

export default function  AppFiqhuContent({route}) {

    function findContent () {
        let level = content.find((e) => e.level === route.params.level) 
        level = level.subtopic
        subtopics = level.find((e) => e.id === route.params.id)

        return subtopics.content
    }

    return (
        <Content data={findContent()} />
        // <AppText>ddd</AppText>
    )
}
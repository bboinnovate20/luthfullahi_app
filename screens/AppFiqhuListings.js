import AppText from "../components/AppText";
import react from "react";
import { level } from "../data/fiqhu";
import ContentListings from "../components/ContentListings";

export default function AppFiqhuListings({route}) {

    function getData() {
      const lessonFiqh = level.find((e) => e.id === route.params.id)
      return lessonFiqh ? lessonFiqh.subtopic : null;
    }

  return (
            <ContentListings
            data={getData()}
            headerName={route.params.topic}
            navigate="FiqhuContent"
            name='name'
            options={{level: route.params.id}}
          />
       )
}
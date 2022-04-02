import apiClient from "./api";

function getLocation(location, month, year) {
    const data = {
        latitude: location.latitude,
        longitude: location.longitude,
        method: 2,
        month,
        year
    }

    const url = new URLSearchParams(data)
   return apiClient.get('', {...data})
}

export default getLocation;
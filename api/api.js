import {create} from 'apisauce'

const AthanAPI =  'http://api.aladhan.com/v1/hijriCalendar'

const apiClient = create({
    baseURL: AthanAPI
})

export default apiClient;
import { pickBy, omitBy } from 'lodash'
import { isToday, isYesterday, parseISO } from "date-fns";

export const getTodayItems = (list) => {
    // return pickBy(list, (i) => {
    //     return [...isToday(parseISO(i.update_date))]
    // })
   return list.filter(i => isToday(parseISO(i.update_date)))
}
export const getYesterdayItems = (list) => {
 // return pickBy(list, (i) => {
 //     return [...isYesterday(parseISO(i.update_date))]
 // })
    return list.filter(i => isYesterday(parseISO(i.update_date)))
}

export const excludeTodayYesterdayItems = (list) => {
    // return omitBy(list, (i) => {
    //     return [...isToday(parseISO(i.update_date))] ||
    //         [...isYesterday(parseISO(i.update_date))]
    // })
    return list.filter(i => !isYesterday(parseISO(i.update_date)) && !isToday(parseISO(i.update_date)))
}

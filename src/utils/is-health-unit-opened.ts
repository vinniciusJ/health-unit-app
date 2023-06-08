import { isAfter, isBefore, isEqual, parse, startOfMinute } from "date-fns"
import { OpeningHours } from "../interfaces/opening-hours"
import { getHoursFromOpeningHours } from "./get-hours-from-opening-hours"

export const isHealthUnitOpened = (openingHours: OpeningHours) => {
    const [ opening, closing ] = getHoursFromOpeningHours(openingHours)

    const [ openingTime, closingTime, currentTime ] = [
        parse(opening, 'HH:mm', new Date()),
        parse(closing, 'HH:mm', new Date()),
        startOfMinute(new Date())
    ]

    if(isEqual(openingTime, closingTime)) {
        return false
    }

    if(isBefore(openingTime, closingTime)){
        return isAfter(currentTime, openingTime) && isBefore(currentTime, closingTime)
    }
    else{
        return isAfter(currentTime, openingTime) || isBefore(currentTime, closingTime);
    }
}
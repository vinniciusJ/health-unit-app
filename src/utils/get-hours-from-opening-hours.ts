import { OpeningHours } from "../interfaces/opening-hours";

export const getHoursFromOpeningHours = (openingHours: OpeningHours) => {
    return openingHours.split(' - ')
}
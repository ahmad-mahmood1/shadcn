import { DATE_FORMAT } from "../constants"
import { DATE_TIME_FORMAT } from "../constants"
import { TIME_DATE_FORMAT } from "../constants"
import moment from "moment"

export function getDayFromDate(date) {
  let daysHash = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  }
  const dayNumber = moment(date).day()
  return daysHash[dayNumber]
}

export function getMonthFromString(mon) {
  const month = new Date(Date.parse(`${mon} 1, 2012`)).getMonth() + 1
  return month.toString().length === 1 ? `0${month}` : month
}

export function getStartValue(start) {
  return `${start[3]}-${getMonthFromString(start[1])}-${start[2]}`
}

export function getEndValue(end) {
  return `${end[3]}-${getMonthFromString(end[1])}-${end[2]}`
}

export function getStartEndValue(start, end) {
  const startDate = getTimeDateString(getStartValue(start), false, true)
  const endDate = getTimeDateString(getStartValue(end), false, true)
  return `${startDate} - ${endDate}`
}

export const getTimeDateString = (dateString, local, noTime, timeOnly) => {
  //   const timezone = configs.settings.timezone;
  const format = noTime ? DATE_FORMAT : TIME_DATE_FORMAT
  if (!!dateString) {
    // if (timezone) {
    //   dateString = moment(dateString)
    //     // .tz(timeZone)
    //     .format(DATE_TIME_FORMAT);
    // }

    let date = new Date(
      typeof dateString === "string" && dateString.includes("Z") && !local
        ? dateString.replace("Z", "")
        : typeof dateString === "string"
        ? dateString //.replace(" ", "T")
        : dateString
    )
    const datetime = moment(date).format(format)
    const time = moment(date).format("hh:mm a")
    return timeOnly ? time : datetime
  }
}

export const checkExpiryInHours = date => {
  const now = moment()
  const difference = now.diff(date)
  return difference > 24 ? true : false
}

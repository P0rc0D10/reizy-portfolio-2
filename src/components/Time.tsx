import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dayjs } from 'lib/dayjs'
import useFireWork from 'react-use-firework'

const now = () => dayjs().tz()

const events = {
  christmas: [25, 12],
  newYear: [1, 1],
  earthDay: [22, 4],
  birthday: [14, 7],
  independenceDay: [15, 8],
  valentine: [14, 2],
  halloween: [31, 10],
  christmasEve: [24, 12],
  newYearEve: [31, 12],
}

const format = 'hhA'
const beforeTime = dayjs('12AM', format).tz()
const afterTime = dayjs('8AM', format).tz()

const Time = () => {
  const ref = useRef(null)
  useFireWork(ref, { range: 90 })

  const [date, setDate] = useState(now())

  const currentEvent = Object.entries(events)
    .filter(
      (entry) =>
        entry[1][0] === date.date() && entry[1][1] === date.month() + 1,
    )
    .flat()[0] as string

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="tooltip tooltip-right" data-tip="Timezone: UTC+1">
        <FontAwesomeIcon
          className=""
          icon={
            date.isBetween(beforeTime, afterTime)
              ? ['far', 'clock']
              : ['fas', 'clock']
          }
        />
      </div>{' '}
      {date.format('Do MMMM YYYY • h:mm:ss A')}{' '}
      {currentEvent && (
        <span
          className="font-bold animate-pulse badge-outline badge-success select-none hidden md:block"
          ref={ref}
        >
          —{' '}
          {
            {
              christmas: 'Merry Christmas!',
              newYear: 'Happy New Year!',
              earthDay: 'Happy Earth Day!',
              birthday: 'Happy Birthday to ME!',
              independenceDay: 'Happy Independence Day!',
              valentine: "Happy Valentine's Day!",
              halloween: 'Happy Halloween!',
              christmasEve: 'Merry Christmas Eve!',
              newYearEve: 'Happy New Year Eve!',
            }[currentEvent]
          }
        </span>
      )}
    </>
  )
}

export default Time

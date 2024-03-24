import useSWR from 'swr'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WeatherResponse } from 'types/weather'

export const Weather = () => {
  const [useCelsius, setCelsius] = useState(true)

  const { data }: { data?: WeatherResponse } = useSWR('weather')

  if (!data) return null

  const { main: weatherName, description: weatherDescription } = data.weather[0]
  const { temp: celsius } = data.main

  const fahrenheit = (celsius * 9) / 5 + 32
  const toggleTemperature = () => setCelsius((celsius) => !celsius)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="tooltip tooltip-right" data-tip={weatherDescription}>
        <FontAwesomeIcon icon={['fas', 'cloud']} />{' '}
      </div>{' '}
      It&apos;s currently{' '}
      {(celsius < 8 && <span className="mr-1">❄️</span>) ||
        (celsius > 30 && <span className="mr-1">🔥</span>)}
      <span
        onMouseOver={toggleTemperature}
        onMouseLeave={toggleTemperature}
        className="font-bold"
      >
        <div className="badge select-none">
          {useCelsius
            ? `${Math.round(celsius)} °C`
            : `${Math.round(fahrenheit)} °F`}
        </div>
      </span>{' '}
      in{' '}
      <a
        href="https://weather.com/en-GB/weather/today/l/48019c7905845ce90e6569d362519033123d84670d35df402b1c6af25575e793"
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold focus:outline-none transition duration-300 ease-in-out hover:text-[#36D399]"
      >
        Padova, Veneto, Italy
      </a>
      .
    </motion.div>
  )
}

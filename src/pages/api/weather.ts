import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=padova&units=metric&appid=${process.env.WEATHER_API_KEY}`,
  )
  const data = await response.json()
  res.status(200).json(data)
}

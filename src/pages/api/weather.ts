import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=padova&units=metric&appid=eecd2e62383a31c75535e0c23d2eb967`,
  )
  const data = await response.json()
  res.status(200).json(data)
}

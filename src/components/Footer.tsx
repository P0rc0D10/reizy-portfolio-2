import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import type { NowPlayingSong } from 'lib/types'
import { truncate } from 'lib/utils'
import Link from 'next/link'
export default function Footer() {
  const { data, error, isValidating } = useSWR<NowPlayingSong>(
    '/api/spotify/now-playing',
    fetcher,
  )
  return (
    <>
      <div className="overflow-hidden">
        <h2 className=" landingSectionTitle relative mb-4 mt-4 w-max">
          <div className="btn btn-success btn-outline gap-2 font-semibold text-sm sm:text-regular">
            <Link href={`${data?.isPlaying ? '/spotify' : ''}`}>
              <FontAwesomeIcon
                icon={['fab', 'spotify']}
                className={`${
                  data?.title && data?.artist
                    ? 'animate-bounce duration-300 transition-all '
                    : null
                }`}
              />
            </Link>
            {data?.title ? truncate(data?.title, 30) : 'Not Playing – Spotify'}
          </div>
        </h2>
      </div>
      <div className="md:flex">
        <div className="btn-group grid grid-cols-4 justify-between md:justify-start w-full md:mr-3 md:mb-0 mb-2">
          <a
            href="/github"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 hover:scale-110 fill-transparent hover:fill-butDark hover:text-butDark transition duration-200 ease-in-and-out"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="/twitter"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 hover:scale-110 fill-transparent hover:fill-butDark hover:text-butDark transition duration-200 ease-in-and-out"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a
            href="/mail"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="Mail"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 hover:scale-110 fill-transparent hover:fill-butDark hover:text-butDark transition duration-200 ease-in-and-out"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a
            href="/youtube"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="Youtube"
          >
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 hover:scale-110 fill-transparent hover:fill-butDark hover:text-butDark transition duration-200 ease-in-and-out"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"/>
          </svg>
          </a>
        </div>
      </div>
    </>
  )
}

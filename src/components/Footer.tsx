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
              <path stroke="#000000" stroke-width="12" d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"/>
          </svg>
          </a>
        </div>
        <div className="btn-group grid grid-cols-2 justify-between md:justify-end w-full rounded-md outline md:outline-2">
          <a
            href="/contactme"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="Telegram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mx-2 hover:scale-110 fill-lightText hover:fill-butDark hover:text-butDark transition duration-200 ease-in-and-out"
              width="100"
              height="100"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
            <path d="M14 7.5C14 11.0897 11.0903 14 7.5 14V15C11.6426 15 15 11.6419 15 7.5H14ZM7.5 14C3.90974 14 1 11.0897 1 7.5H0C0 11.6419 3.35739 15 7.5 15V14ZM1 7.5C1 3.91029 3.90974 1 7.5 1V0C3.35739 0 0 3.35806 0 7.5H1ZM7.5 1C11.0903 1 14 3.91029 14 7.5H15C15 3.35806 11.6426 0 7.5 0V1ZM3.6619 10.1162C4.64825 9.87576 5.86144 9.77072 7.05416 9.88791C8.25009 10.0054 9.38823 10.3424 10.2559 10.9525L10.8311 10.1345C9.77768 9.39382 8.45578 9.02081 7.15195 8.8927C5.84491 8.76428 4.51862 8.87807 3.42506 9.14466L3.6619 10.1162ZM3.32624 7.99237C6.772 7.38275 9.17433 7.69462 11.1649 9.12359L11.7481 8.31123C9.44985 6.66142 6.73182 6.37433 3.15202 7.00766L3.32624 7.99237ZM3.10135 5.84102C4.45435 5.36298 6.10442 5.1645 7.72549 5.29726C9.34836 5.43016 10.9042 5.8917 12.0886 6.69623L12.6505 5.86901C11.2863 4.94241 9.55125 4.44343 7.80712 4.30059C6.06118 4.15761 4.26817 4.36818 2.76821 4.89814L3.10135 5.84102Z"></path>
            </svg>
          </a>
          <a
            href="/spotifyprofile"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="Spotify"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 hover:scale-110 fill-lightText hover:fill-butDark hover:text-butDark transition duration-200 ease-in-and-out"
              width="30"
              height="30"
              viewBox="0 0 640 512"
              fill="none"
              stroke="currentColor"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
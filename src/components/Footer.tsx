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
                  data?.title
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
            href="/telegram"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="Telegram"
          >
            {' '}
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
            <path fill-rule="evenodd" d="M23,11.9972 C23,15.0688707 22.7080514,16.9571365 22.0247481,18.1281724 C21.3347709,19.3777602 20.5269977,19.7708297 18.8782989,19.8862992 C17.7148693,19.9542414 14.794638,20 12.0026667,20 C9.2044172,20 6.28275714,19.9542562 5.10860514,19.8855427 C3.47493151,19.7708031 2.66701263,19.37838 1.97791182,18.142374 C1.29279472,16.9480084 1,15.052042 1,12.0084 C1,8.94737365 1.29138368,7.06090428 1.97193166,5.86259947 C2.67010997,4.61046509 3.49111627,4.21325835 5.11100471,4.1184917 C6.23144506,4.04250638 8.99660854,4 12.0026667,4 C15.002263,4 17.766208,4.04252223 18.8782989,4.11790083 C20.5073007,4.21303163 21.3281267,4.60936303 22.020213,5.8580297 C22.7108012,7.06048454 23,8.93778123 23,11.9972 Z M20.283329,6.84963647 C19.9603324,6.26505017 19.7713697,6.17346202 18.752413,6.11391338 C17.6926261,6.04212137 14.954737,6 12.0026667,6 C9.04424331,6 6.3050775,6.04210674 5.2370951,6.1144916 C4.22844212,6.17352647 4.03674592,6.26627 3.71489655,6.84342165 C3.2475376,7.66638709 3,9.26898917 3,11.9972 C3,14.7270394 3.24886149,16.33852 3.71873501,17.1577995 C4.03565111,17.7261665 4.22600958,17.8186276 5.23703026,17.8897046 C6.34874254,17.9546989 9.24212825,18 12.0026667,18 C14.7569983,18 17.6489264,17.9546849 18.7500936,17.8904464 C19.7737637,17.8187098 19.961409,17.7274 20.2855157,17.1409953 C20.752236,16.3407623 21,14.7382734 21,12.0084 C21,9.25771396 20.7535449,7.66399511 20.283329,6.84963647 Z M10,9 L15,12 L10,15 L10,9 Z"/>
          </svg>
          </a>
        </div>
        <div className="btn-group grid grid-cols-2 justify-between md:justify-end w-full rounded-md outline md:outline-2">
          <a
            href="/youtube"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            aria-label="Youtube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mx-2 hover:scale-110 fill-lightText hover:fill-butDark hover:text-butDark transition duration-200 ease-in-and-out"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" />
            </svg>
          </a>
          <a
            href="/spotify"
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
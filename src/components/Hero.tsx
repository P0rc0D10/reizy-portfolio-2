import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Weather } from 'components/Weather'
import { Circles } from './circles'
import Image from 'next/image'
const Time = dynamic(() => import('components/Time'), {
  ssr: false,
})
export default function Hero() {
  return (
    <>
      <a rel="me" href="https://tech.lgbt/@dispaisy"></a>
      <a rel="me" href="https://en.pronouns.page/@DisPaisy"></a>
      <div className="flex flex-col lg:flex-row gap-5 items-center">
        <div className="relative z-10 mt-10 md:mt-0">
          <label htmlFor="egg" className="modal-button">
            <Image
              src="/hero.webp"
              alt="reizy pfp"
              className="rounded-xl rounded-tl-none transition-all duration-500 scale-75 hover:scale-100 rotate-6 hover:rotate-0 cursor-pointer"
              width={400}
              height={400}
              placeholder="blur"
              blurDataURL="/profile.webp"
              priority
            />
          </label>
          <Circles color="#9B4F96" />
        </div>
        <div>
          <div className="text-4xl">
            Hey there,
            <h1 className="flex gap-2">
              I&apos;m
              <div className="text-butLight hover:text-bgDark hover:dark:text-bgLight transition-colors duration-500 underline-offset-2 decoration-2 underline decoration-[#9B4F96] select-none">
                DisPaisy!
              </div>
            </h1>
          </div>
          <div className="divider">
            <Time />
          </div>
          <div className="grid ">
            <div className="text-lg 2xl:text-2xl">
              <FontAwesomeIcon icon={['fas', 'info-circle']} /> Founder of lyable distribution & Cat lover 🐈
            </div>
            <div className="text-lg 2xl:text-2xl">
              <Weather />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 btn-group grid grid-cols-2 justify-between outline outline-2 rounded-md">
        <Link href="/lyabledistribution">
          <div className="btn btn-ghost  gap-2 text-lightText rounded-md">
            <FontAwesomeIcon className="w-4 h-4" icon={['fas', 'music']} />
            lyable distribution
          </div>
        </Link>
        <Link href="/contact">
          <div className="btn btn-ghost gap-2 text-lightText rounded-md">
            <FontAwesomeIcon
              className="w-4 h-4"
              icon={['fas', 'paper-plane']}
            />
            Contact Me
          </div>
        </Link>
        <input type="checkbox" id="egg" className="modal-toggle" />
        <label
          htmlFor="egg"
          className="modal cursor-pointer bg-slate-300 dark:bg-slate-600"
        >
          <label className="modal-box relative bg-slate-400 dark:bg-slate-700">
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">
              🥚 Oh, you found the secret! :3
            </h3>
            <div className="py-4">
              <Image
                src="/secret.svg"
                alt="secret"
                width={500}
                height={500}
                className="rounded-md"
              />
              <Link href="/secret">
                <div className="btn btn-ghost w-full bg-slate-500 dark:bg-[#434955] text-slate-700 dark:text-[#9B4F96] rounded-none rounded-b-md gap-2 h-auto p-3 shadow-xl">
                  <div className="badge gap-2 badge-error rounded-md badge-outline badge-lg h-auto animate-bounce">
                    QR Code not working? Click here!
                  </div>
                </div>
              </Link>
            </div>
          </label>
        </label>
      </div>
    </>
  )
}

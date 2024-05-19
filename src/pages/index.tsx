import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Order Summary</title>
        <meta name="description" content="order-summary-component" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue font-sans">
        {/* Background Images */}
        <Image
          className="absolute left-0 top-0 z-0 block h-auto w-full md:hidden"
          src="/images/pattern-background-mobile.svg"
          height={100}
          width={100}
          alt="mobile-background"
        />
        <Image
          className="absolute left-0 top-0 z-0 hidden h-auto w-full md:block"
          src="/images/pattern-background-desktop.svg"
          width={100}
          height={100}
          alt="desktop-background"
        />
        {/* Order Summary Container */}
        <div className="z-1 relative flex w-[90vw] flex-col overflow-hidden rounded-3xl bg-white md:max-w-[520px]">
          <Image
            className="w-full"
            src="/images/illustration-hero.svg"
            width={100}
            height={100}
            alt="Hero-Illustration"
          />
          {/* Content */}
          <div className="mx-8 my-10">
            <h2 className="text-center text-3xl font-extrabold text-dark-blue">
              Order Summary
            </h2>
            <p className="my-6 mb-8 text-center text-xl leading-8 text-desaturated-blue">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className="my-6 flex flex-row gap-6 rounded-xl bg-very-pale-blue p-6">
              <Image
                className="h-14 w-auto"
                src="/images/icon-music.svg"
                width={50}
                height={50}
                alt="Music-Icon"
              />
              <div className="flex w-full flex-col justify-center">
                <p className="text-lg font-bold">Annual Plan</p>
                <p className="text-lg text-desaturated-blue">$59.99/year</p>
              </div>
              <button className="text-lg font-bold text-bright-blue underline hover:text-indigo-400 hover:no-underline">
                Change
              </button>
            </div>
            <button className="my-2 w-full rounded-xl bg-bright-blue py-5 text-xl font-bold tracking-wide text-very-pale-blue shadow-2xl shadow-bright-blue/50 hover:bg-indigo-400">
              Proceed to Payment
            </button>
            <button className="mt-2 w-full rounded-xl bg-transparent py-5 text-xl font-bold tracking-wide text-desaturated-blue hover:bg-bright-blue/5 hover:text-dark-blue">
              Cancel Order
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

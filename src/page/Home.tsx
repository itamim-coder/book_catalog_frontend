
import Book from "./Book";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://c4.wallpaperflare.com/wallpaper/935/849/231/background-tree-book-wallpaper-preview.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="pb-12 text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Long headline to turn <br className="hidden lg:block" />
                  your visitors into users
                </h1>
                <form
                  action=""
                  method="post"
                  id="revue-form"
                  name="revue-form"
                  target="_blank"
                  className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-3xl lg:flex"
                >
                  <div className="divide-y lg:divide-x lg:divide-y-0 lg:flex space-y 4">
                    <div className="flex-1 min-w-0 revue-form-group">
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your name "
                      />
                    </div>
                    <div className="flex-1 min-w-0 revue-form-group">
                      <label htmlFor="member_email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your email  "
                      />
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 lg:ml-3 revue-form-actions">
                    <button
                      type="submit"
                      value="Subscribe"
                      name="member[subscribe]"
                      id="member_submit"
                      className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
                <div className="sm:max-w-lg sm:flex md:mx-auto">
                  <p className="mt-3 text-xs text-white">
                    By subscribing, you agree with Revue’s
                    <a target="_blank" href="https://www.getrevue.co/terms">
                      Terms of Service
                    </a>
                    and
                    <a target="_blank" href="https://www.getrevue.co/privacy">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" dark:bg-gray-800 dark:text-gray-100 ">
        <div className="text-center text-3xl font-bold ">
          <h2 className="pt-5">Recently Added Book</h2>
        </div>
        <Book></Book>
      </div>
    </>
  );
}

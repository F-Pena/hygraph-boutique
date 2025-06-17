// Desc: Footer component for the website

import navigation from "../utils/getNavigation";
export default function Footer() {
  return (
    <footer className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="/">
                  <span className="sr-only">Hygraph Commerce</span>
                  <svg width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.9727 0L29.687 3.92858L25.6129 7.32367C25.2421 7.63271 24.7034 7.63271 24.3325 7.32367L20.2585 3.92858L24.9727 0Z" fill="#fff"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.3325 11.3545C24.7034 11.6635 25.2421 11.6635 25.6129 11.3545L32.1054 5.94397L35.8399 9.05606L27.5335 15.9782C26.0501 17.2143 23.8954 17.2143 22.412 15.9782L14.1055 9.05606L17.84 5.94397L24.3325 11.3545Z" fill="#fff"></path>
                    <path d="M24.9727 40L20.2585 36.0714L24.3325 32.6763C24.7034 32.3673 25.2421 32.3673 25.6129 32.6763L29.687 36.0714L24.9727 40Z" fill="#fff"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.6129 28.6455C25.2421 28.3365 24.7034 28.3365 24.3325 28.6455L17.84 34.056L14.1055 30.9439L22.412 24.0218C23.8954 22.7857 26.0501 22.7857 27.5335 24.0218L35.8399 30.9439L32.1054 34.056L25.6129 28.6455Z" fill="#fff"></path>
                    <path d="M48.9727 20L44.2584 16.0714L40.466 19.2318C39.9862 19.6316 39.9862 20.3684 40.466 20.7682L44.2584 23.9286L48.9727 20Z" fill="#fff"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M35.6291 20.7682C35.1493 20.3684 35.1493 19.6316 35.6291 19.2318L41.8399 14.056L38.1054 10.9439L30.9257 16.9271C29.0067 18.5263 29.0067 21.4737 30.9257 23.0729L38.1054 29.0561L41.8399 25.944L35.6291 20.7682Z" fill="#fff"></path>
                    <path d="M0.972656 20.0001L5.68692 23.9287L9.47933 20.7683C9.95909 20.3685 9.95909 19.6317 9.47933 19.2319L5.68692 16.0715L0.972656 20.0001Z" fill="#fff"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.3162 19.2319C14.796 19.6317 14.796 20.3685 14.3163 20.7683L8.10538 25.9441L11.8399 29.0562L19.0196 23.073C20.9386 21.4738 20.9386 18.5264 19.0196 16.9272L11.8399 10.944L8.10538 14.0561L14.3162 19.2319Z" fill="#fff"></path>
                  </svg>
                </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <p className="text-gray-400 text-sm">Find us here:</p>
            <div className="flex space-x-3 mt-2">
              <a className="text-gray-400 hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  Press &amp; News
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  Shop
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm" href="#">
                  Shipping Details
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to get the latest news about deals, offers and more.
            </p>
            <form className="flex">
              <input
                className="flex-grow p-3 rounded-l-md bg-gray-700 text-gray-300 focus:ring-red-500 focus:border-red-500 border-transparent placeholder-gray-500 text-sm"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="btn btn-primary rounded-r-md px-3 bg-red-500 hover:bg-red-600 text-sm"
                type="submit"
              >
                <span className="material-icons text-lg">send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © All right reserved. Hygraph POC Fashion 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

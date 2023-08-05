import React from "react";

function Footer() {
  return (
    <footer className="bg-colormain text-center text-white font-Oswald mt-24">
      <div className="container px-6 pt-6 mx-auto">
        <div className="mb-6 flex justify-center">
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns=""
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.569c-.885.389-1.834.65-2.826.77a4.87 4.87 0 0 0 2.135-2.68 9.811 9.811 0 0 1-3.11 1.195 4.84 4.84 0 0 0-8.518 3.305 13.758 13.758 0 0 1-10-5.083 4.87 4.87 0 0 0 1.5 6.486 4.794 4.794 0 0 1-2.2-.604v.061a4.841 4.841 0 0 0 3.874 4.744c-.676.186-1.376.202-2.04.076a4.852 4.852 0 0 0 4.535 3.366A9.713 9.713 0 0 1 0 18.206 13.722 13.722 0 0 0 7.66 20c9.007 0 13.942-7.461 13.942-13.942 0-.214-.005-.427-.013-.64a9.978 9.978 0 0 0 2.42-2.564l-.007-.003z" />
            </svg>
          </a>
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.25 0h-8.5C3.982 0 2.993.99 2.993 2.25v8.5c0 1.26.99 2.25 2.25 2.25h8.5c1.26 0 2.25-.99 2.25-2.25v-8.5c0-1.26-.99-2.25-2.25-2.25zM12 5.498a6.5 6.5 0 1 0 0 12.998 6.5 6.5 0 0 0 0-12.998zm0 11a4.5 4.5 0 1 1 0-8.998 4.5 4.5 0 0 1 0 8.998zm6.25-11a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM12 8.624a3.377 3.377 0 0 0-3.375 3.375c0 1.86 1.515 3.375 3.375 3.375 1.86 0 3.375-1.515 3.375-3.375 0-1.86-1.515-3.375-3.375-3.375zm6.25 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div
        className="p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        ©&nbsp; 2023 Copyright&nbsp; : &nbsp;
        <a className="text-white" href="https://tailwind-elements.com/">
          Vincent Vinuya
        </a>
      </div>
    </footer>
  );
}

export default Footer;

// Desc: Hero component that corresponds to CTA Hygraph component
// RichText is a component that renders Hygraph RichText JSON
'use client'
import { RichText } from "@graphcms/rich-text-react-renderer"
import { useId } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
export default function Hero({ label, button, title, description, image}) {
  const hasImage = image != null && image != "";
  const heroId = useId();
  return (
    <div id={heroId} className="relative min-h-[70vh] w-full mx-auto px-4 pt-16 pb-24">
        {/* Left: Image */}
        {hasImage && (
          <div className="absolute inset-0 top-0 bg-no-repeat bg-cover bg-fixed parallax-bg bg-center opacity-30" style={{backgroundImage: `url(${image})`}} aria-hidden="true">
            
          </div>
        )}
        {/* Center: Text */}
        <div className="container mx-auto px-6 relative z-20 sticky top-24">
          <div className={`flex flex-col ${hasImage ? 'items-center' : 'items-start'} z-20 bg-transparent px-12 py-8 max-w-3xl mx-auto text-center ${hasImage ? 'text-left' : 'text-center'}`}>
            {label && (
              <span className="text-sm uppercase text-gray-400 tracking-wider mb-2">
                {label}
              </span>
            )}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            {description && <RichText content={description} />}
            {button?.url && (
              <a
                href={button.url}
                className="inline-block px-8 py-2 bg-black text-white font-medium shadow hover:bg-gray-200 hover:text-black transition-colors duration-300 text-lg mt-2"
              >
                {button.text}
              </a>
            )}
          </div>
        </div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#181C23] to-[#232733] -z-10" />

        <button type="button" className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce" onClick={() => {
          const hero = document.getElementById(heroId);
          console.log('hero arrow clicked');
          if (hero) {
            const heroHeight = hero.getBoundingClientRect().height;
            window.scrollTo({
              top: heroHeight,
              behavior: 'smooth'
            }); 
          }
        }}>
          <ArrowDownIcon className="w-10 h-10 text-red-500 mb-4" />
        </button>
      </div>
  );
}
   
   
export function FullHero({label, title, description, button, image}) {
  // Full width stripe with a large image to the right and title and description and buttons on the left
  return (<>
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="self-center sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">{props.title}</span>
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            {props.description}
          </p>
          {props.button ? <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
           <a
            href={props.button.url}
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
          >
            {props.button.text}
          </a>
        </div>
       

      </div> : ''}
        </div>
        
        {props.image && <div className="self-stretch overflow-hidden lg:col-span-6">
      <img className="object-cover object-center w-full h-full" src={props.image} alt="" />
    </div>}
      </div>
    </div>
  </>)
}
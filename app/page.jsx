import Head from 'next/head'
import Image from 'next/image'
import Hero, {FullHero} from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import {getSomeProducts} from '../utils/getProducts'

import { getPageBySlug } from '../utils/getPages'
import Section from '../components/Section'
import { TruckIcon, PhoneIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'


export const metadata = {
  title: 'Welcome to the Hygraph Shop',
}

export default async function Page({params}) {
    const {stripes,landingPageTitle} = await getPageBySlug('/')
    const products = await getSomeProducts(4)

  return (
    <>
      { stripes && stripes.map(stripe => {
        if (stripe.__typename === 'CallToAction') {
          return <Hero
            key={stripe.id}
            image={stripe.image?.url}
            title={stripe.heading}
            description={stripe.body.raw}
            button={{text: stripe.button.text, url: stripe.button.url}}
          />
        }
        if (stripe.__typename === 'ProductGrid') {
          return <ProductGrid key={stripe.id} title={stripe.headline} products={stripe.products} />
        }
      })}
      <Section classes="py-16 md:py-24 bg-gray-900 mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <TruckIcon className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Free Shipping</h3>
                <p className="text-gray-400 leading-relaxed">Faucibus interdum posuere lorem ipsum dolor sit amet. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <PhoneIcon className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Customer Service</h3>
                <p className="text-gray-400 leading-relaxed">Faucibus interdum posuere lorem ipsum dolor sit amet. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <ShieldCheckIcon className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Money Back Guarantee</h3>
                <p className="text-gray-400 leading-relaxed">Faucibus interdum posuere lorem ipsum dolor sit amet. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.</p>
              </div>
            </div>
          </div>
        </Section>
    </>
  )
}


// Product detail pages generated from utils/getProducts.js
// Path: /pages/products/[slug].js
import React from 'react';
import { getProductBySlug } from '../../../utils/getProducts'
import ImageGroup from '../../../components/ImageGroup'
import Section from '../../../components/Section'
import { draftMode } from 'next/headers';
import Alert from '../../../components/PreviewAlert';
import AddToBagButton from '../../../components/AddToBag';
 



export default async function  Page({params}) {
    const preview = draftMode().isEnabled;
    const product = await getProductBySlug(params.slug, preview)

    return (
       <Section classes={`container mx-auto px-6`}>
            <div className='grid md:grid-cols-[minmax(200px,1fr)_1fr] my-10 gap-3'>
                {product?.productImage && <ImageGroup images={product?.productImage} />}
                <div className='pl-2'>
                    <div className="md:sticky md:top-28">
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                            {product?.productName}
                            {product?.productCategory?.categoryName && (
                                <span className="text-sm">
                                    {product?.productCategory?.categoryName}
                                </span>
                            )}
                        </h1>

                        {/* Options */}
                        <h2 className="sr-only">
                            Product information
                        </h2>
                        <p className="text-3xl tracking-tight mb-4">${product?.productPrice}</p>
                        {/* Description and details */}
                        <h3 className="sr-only">
                            Description
                        </h3>
                        <div className="mb-10" dangerouslySetInnerHTML={{__html: product?.productDescription?.html || ''}}></div>
                        <AddToBagButton />
                    </div>
                </div>
            </div>
        </Section>
    )
}
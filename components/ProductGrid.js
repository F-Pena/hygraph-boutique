import Section from "./Section"

const Product = function({product}) {
  const thumbnail = product.productImage[0] || product.localizations[0]?.productImage[0]

  return (<div className="group relative">
  <div className="min-h-80 aspect-w-8 aspect-h-5 w-full bg-gray-200 group-hover:opacity-75 transition-opacity duration-300">
    {thumbnail && <img
      src={thumbnail.url}
      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
    />}
  </div>
  <div className="mt-4 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl text-gray-300">
        <a href={'/products/' + product.productSlug}>
          {product.productName}
        </a>
      </h3>
      {product.color && (
        <p className="mt-1 text-sm text-gray-300">{product.color}</p>
      )}
    </div>
    <p className="text-lg font-bold text-red-500">${product.productPrice}</p>
  </div>
</div>)
}


export default function ProductGrid({products, title}) {
     return (<Section><div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 text-center">

          {title && <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          </div></Section>
    )
}
  
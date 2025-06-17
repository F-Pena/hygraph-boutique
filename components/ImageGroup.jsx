import FeaturedImage from "./FeaturedImage";
// TODO: Add multi image support
export default function ImageGroup({ images }) {
  return (
    <div>
      <FeaturedImage
        aspectWidth={3}
        aspectHeight={2}
        alt={images[0].alt}
        src={images[0].url}
      />
      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-2 my-2">
          {images.slice(1).map((image) => (
            <FeaturedImage key={image.id} aspectWidth={3} aspectHeight={2} alt={image.alt} src={image.url} />
          ))}
        </div>
      )}
    </div>
  );
}

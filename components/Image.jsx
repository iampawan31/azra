const Image = ({ src, alt, imageClass, ...props }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} {...props} />
}

export default Image

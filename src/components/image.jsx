import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function Image({ src, lazyLoad, ...rest }) {
  const component = () => <img src={src} alt="" {...rest} />;
  return lazyLoad ? (
    <LazyLoadComponent>{component()}</LazyLoadComponent>
  ) : (
    component()
  );
}

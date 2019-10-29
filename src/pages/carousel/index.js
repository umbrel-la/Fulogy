import React from 'react';
// import { images } from '@/img';
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { observer, inject } from 'mobx-react';
import withStore from '@/hocs/withStore';

function App(props){
  let images = props.stores.getActive;
  const [index, setIndex] = React.useState(0);
  return(
    <Gallery
    style={{
        height: "65vh",
        width: "50vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage
                objectFit="contain"
                key={image}
                src={image}
                />
      ))}
    </Gallery>
  );
}

export default withStore(App);

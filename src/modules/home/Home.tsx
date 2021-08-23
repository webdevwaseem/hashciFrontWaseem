import React from "react";
import CreateCollection from "../app/components/Collection/CreateCollection";
import Login from "../app/components/Login/Login";
import SignUp from "../app/components/SignUp/SignUp";
import { Galleryimg, Galleryitem, Homebody, Gallery } from "./style";

const Home = (props: any) => {
  return (
  
  <Homebody>
  <CreateCollection />
      <Gallery>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" />
        </Galleryitem>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2021/06/06/12/23/landscape-6315249_960_720.jpg" />
        </Galleryitem>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" />
        </Galleryitem>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2019/05/04/15/24/art-4178302_1280.jpg" />
        </Galleryitem>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734_1280.jpg" />
        </Galleryitem>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2011/06/20/22/35/graffiti-8051_1280.jpg" />
        </Galleryitem>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2021/07/25/12/19/building-6491721_960_720.jpg" />
        </Galleryitem>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2021/05/08/09/08/sunset-6237951_960_720.jpg" />
        </Galleryitem>
        <Galleryitem>
          <Galleryimg src="https://cdn.pixabay.com/photo/2021/08/10/18/32/cat-6536684_960_720.jpg" />
        </Galleryitem>
      </Gallery>
    </Homebody>
  );
};

export default Home;

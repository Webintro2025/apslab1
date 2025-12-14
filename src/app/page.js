import GetInTouch from "@/components/GetInTouch";
import HomeBanner from "@/components/HomeBanner";
import Maps from "@/components/Maps";
import Slides from "@/components/Slides";
import Choose from "@/components/Choose";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Count from "@/components/Count";
import Curve from "@/components/Curve";
import Gallery from "@/components/Gallery";



export default function Home() {
  return (
   <>
   <HomeBanner />
   <About/>

   <Gallery />
<Curve/>
<Slides/>
<Choose/>
<Count/>
<WhatWeDo />


   <GetInTouch />
<Maps />
   </>
  );
}

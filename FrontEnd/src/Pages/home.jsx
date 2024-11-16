import React from "react";
import HomeSection from "../Shared/homeSection";
import FeaturedProduct from "../Shared/featuredProduct";
import ShopByCategory from "../Shared/ShopByCategory";
import ExploreCollection from "../Shared/exploreCollection";
import StayUpdated from "../Shared/StayUpdated";
import BlogSection from "../Shared/BlogSection";
import CustomPage from "../components/CustomPage";

function Home() {
  return (
    <div>
      <CustomPage>
        <HomeSection />
        <FeaturedProduct />
        {/* <ShopByCategory /> */}
        {/* <ExploreCollection /> */}
        {/* <StayUpdated /> */}
        {/* <BlogSection /> */}
      </CustomPage>
    </div>
  );
}
export default Home;

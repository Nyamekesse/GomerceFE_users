import React from "react";
import BreadCrumbs from "../../components/Breadcrumbs";
import Wrapper from "../../components/Wrapper/Wrapper";
import DetailsMain from "./DetailsMain";
import SpecificationsMain from "./SpecificationsMain";
import ReviewsMain from "./ReviewsMain";
import RecommendedItems from "../../components/RecommendedItems";

const ItemPage = () => {
  const navigation = [
    { label: "Home", link: "/" },
    { label: "Collection", link: "/" },
    { label: "Item Title", link: "/" },
  ];
  return (
    <Wrapper>
      <BreadCrumbs navigation={navigation} />
      <DetailsMain />
      <SpecificationsMain />
      <ReviewsMain />
      <RecommendedItems />
    </Wrapper>
  );
};

export default ItemPage;

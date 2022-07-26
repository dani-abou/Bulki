import {
  StyledListingPage, StyledCarousel, StyledCarouselDiv, StyledProductTitle, StyledInformationDiv,
  StyledBackgroundPaper, StyledBuyButton, StyledDescription
} from "./style"
import { useImagesOfProduct, useProduct } from "../../hooks"
import { CircularProgress } from "@mui/material";
import Link from "next/link"
import { useEffect, } from "react";
import { urls } from "../../common";


const Listing = ({ productID, setPageTitle }) => {

  const [product, loading] = useProduct(productID);
  const [images, loadingImages] = useImagesOfProduct(product)

  useEffect(() => setPageTitle(product.productName), [setPageTitle, product])



  return <StyledBackgroundPaper>
    {product && loading === false &&

      <StyledListingPage>
        <StyledCarouselDiv>
          {
            loadingImages ?
              <CircularProgress /> :
              <StyledCarousel urls={images || []} showButtons showThumbnails />
          }
        </StyledCarouselDiv>
        <StyledInformationDiv >
          <StyledProductTitle>{product?.productName}</StyledProductTitle>
          <br />
          <br />
          <StyledDescription>{product?.description}</StyledDescription>
          <Link href={urls.purchaseFlow + '/' + productID}>
            <StyledBuyButton>Buy now </StyledBuyButton>
          </Link>
        </StyledInformationDiv>
      </StyledListingPage>
    }
    {loading === 'ERROR' &&
      <>COULD NOT FIND product: {productID}</>
    }
    {loading === true && <>Loading</>
    }
  </StyledBackgroundPaper>



}

export default Listing
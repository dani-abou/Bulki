import BulkiButton, { BulkiIconButton } from "../../components/BulkiButton"
import BulkiForm from "../../components/BulkiForm"
import { ShippingInfoForm, POCInfo } from "../../components/BulkiForm/forms/purchaseInfo"
import {
  StyledFormTitle, StyledShippingDiv, StyledFormDiv, StyledQuoteDiv, StyledQuote
} from "./style"
import { useInstantQuote } from "../../hooks"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useEffect, useState } from "react"
import { BulkiCaption, BulkiH5 } from "../../assets"

const ShippingInfo = ({ formControl, formValues }) => {

  const estimatedShippingCost = useInstantQuote(formValues.shippingInfo);

  return <StyledShippingDiv>
    <StyledFormDiv>
      <StyledFormTitle>Shipping Info</StyledFormTitle>
      <ShippingInfoForm onChange={formControl} />
      <br />
      <br />

      <StyledFormTitle>Point Of Contact</StyledFormTitle>
      <POCInfo onChange={formControl} />
    </StyledFormDiv>
    <StyledQuoteDiv>
      <StyledQuote>
        <BulkiH5>
          Estimated Shipping Cost: $ {estimatedShippingCost}
        </BulkiH5>
        <br />
        <BulkiCaption >
          We are proud to say that we use Flock Friegh for all of our shipments. I am writing in all the extra dummy text that I can later specify. This is simply so that I can make a nice looking design.
        </BulkiCaption>
      </StyledQuote>
    </StyledQuoteDiv>
  </StyledShippingDiv>
}

export default ShippingInfo
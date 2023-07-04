import { useEffect, useState } from "react";
import HomeComponent from "../CSSfile/ComponentStyle.module.css";
import { useRouter } from "next/router";

const PartnerHeading = () => {
    const router = useRouter();
  const [businessInfo, setBusinessInfo] = useState(true);
  const [managerDetails, setManagerDetails] = useState(false);
  const [aadhaarDetails, setAadhaarDetails] = useState(false);
  const [legalDocuments, setLegalDocuments] = useState(false);
  const [bankDetails, setBankDetails] = useState(false);
  const [serviceInfo, setServiceInfo] = useState(false);
  const [previewDocument, setPreviewDocument] = useState(false);
  const [reachIncreased, setReachIncreased] = useState(false);
  useEffect(()=>{
    if(router.pathname === '/managerDetails' || router.pathname === '/allInfo'){
        setBusinessInfo(false)
        setManagerDetails(true);
      }
  },[router.pathname])
  return (
    <div>
      <div
        className={`${HomeComponent.partnerHeadingCard} px-[24px] pt-[48px] mt-[48px]`}
      >
        <div>
          <h1 className={`${HomeComponent.partnerHeadingMain}`}>
            Partner with us
          </h1>
          <p className={`${HomeComponent.partnerHeadingPara}`}>
            Be our partner in just few steps and start Increasing your reach by
            gaining new customers.
          </p>

          <ul className="steps steps-vertical">
            <li
              onClick={() => {
                setBusinessInfo(true);
                setManagerDetails(false);
                setAadhaarDetails(false);
                setLegalDocuments(false);
                setBankDetails(false);
                setServiceInfo(false);
                setPreviewDocument(false);
                setReachIncreased(false);
                router.push('/')
              }}
              className={`step ${HomeComponent.partnerHeadingOption} ${businessInfo ? `step-primary ${HomeComponent.partnerHeadingOptionSelected}` : ''}`}
            >
              Business Information
            </li>

            <li
              onClick={() => {
                setBusinessInfo(false);
                setManagerDetails(true);
                setAadhaarDetails(false);
                setLegalDocuments(false);
                setBankDetails(false);
                setServiceInfo(false);
                setPreviewDocument(false);
                setReachIncreased(false);
                router.push('/managerDetails')
              }}
              className={`step ${HomeComponent.partnerHeadingOption} ${managerDetails ? `step-primary ${HomeComponent.partnerHeadingOptionSelected}` : ''}`}
              s
            >
              Owner & Manager Details
            </li>

            <li
              onClick={() => {
                setBusinessInfo(false);
                setManagerDetails(false);
                setAadhaarDetails(true);
                setLegalDocuments(false);
                setBankDetails(false);
                setServiceInfo(false);
                setPreviewDocument(false);
                setReachIncreased(false);
              }}
              className={`step ${HomeComponent.partnerHeadingOption} ${aadhaarDetails ? `step-primary ${HomeComponent.partnerHeadingOptionSelected}` : ''}`}
              s
            >
              PAN/Aadhaar Details
            </li>

            <li
              onClick={() => {
                setBusinessInfo(false);
                setManagerDetails(false);
                setAadhaarDetails(false);
                setLegalDocuments(true);
                setBankDetails(false);
                setServiceInfo(false);
                setPreviewDocument(false);
                setReachIncreased(false);
              }}
              className={`step ${HomeComponent.partnerHeadingOption} ${legalDocuments ? `step-primary ${HomeComponent.partnerHeadingOptionSelected}` : ''}`}
              s
            >
              Legal Documents
            </li>

            <li
              onClick={() => {
                setBusinessInfo(false);
                setManagerDetails(false);
                setAadhaarDetails(false);
                setLegalDocuments(false);
                setBankDetails(true);
                setServiceInfo(false);
                setPreviewDocument(false);
                setReachIncreased(false);
              }}
              className={`step ${HomeComponent.partnerHeadingOption} ${bankDetails ? `step-primary ${HomeComponent.partnerHeadingOptionSelected}` : ''}`}
              s
            >
              Bank Details
            </li>

            <li
              onClick={() => {
                setBusinessInfo(false);
                setManagerDetails(false);
                setAadhaarDetails(false);
                setLegalDocuments(false);
                setBankDetails(false);
                setServiceInfo(true);
                setPreviewDocument(false);
                setReachIncreased(false);
              }}
              className={`step ${HomeComponent.partnerHeadingOption} ${serviceInfo ? `step-primary ${HomeComponent.partnerHeadingOptionSelected}` : ''}`}
              s
            >
              Service Info
            </li>

            <li
              onClick={() => {
                setBusinessInfo(false);
                setManagerDetails(false);
                setAadhaarDetails(false);
                setLegalDocuments(false);
                setBankDetails(false);
                setServiceInfo(false);
                setPreviewDocument(true);
                setReachIncreased(false);
              }}
              className={`step ${HomeComponent.partnerHeadingOption} ${previewDocument ? `step-primary ${HomeComponent.partnerHeadingOptionSelected}` : ''}`}
              s
            >
              Preview Document
            </li>

            <li
              onClick={() => {
                setBusinessInfo(false);
                setManagerDetails(false);
                setAadhaarDetails(false);
                setLegalDocuments(false);
                setBankDetails(false);
                setServiceInfo(false);
                setPreviewDocument(false);
                setReachIncreased(true);
              }}
              className={`step ${HomeComponent.partnerHeadingOption} ${reachIncreased ? `step-primary ${HomeComponent.partnerHeadingOptionSelected}` : ''}`}
              s
            >
              Reach Increased
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnerHeading;

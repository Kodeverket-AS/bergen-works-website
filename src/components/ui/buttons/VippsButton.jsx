import Script from 'next/script';

const VippsButton = ({ onVippsCheckoutInitiate, className = "" }) => {
  return (
    <>
      <Script
        src="https://checkout.vipps.no/checkout-button/v1/vipps-checkout-button.js"
      />
      <div
        className={`
          w-[208px]
          h-[44px]
          flex items-center justify-center
          overflow-hidden
          mt-4
          mb-10
          md:mb-2
          ${className}
        `}
      >
        <vipps-mobilepay-button
          type="button"
          brand="vipps"
          language="no"
          variant="primary"
          rounded="false"
          verb="pay"
          stretched="false"
          branded="true"
          loading="false"
          onClick={onVippsCheckoutInitiate}
        ></vipps-mobilepay-button>
      </div>
    </>
  );
};

export default VippsButton;


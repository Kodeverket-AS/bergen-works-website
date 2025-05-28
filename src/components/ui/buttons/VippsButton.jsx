import  { useEffect, useState } from 'react';


const VippsButton = ({ onVippsCheckoutInitiate, className = "" }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
  
    if (document.querySelector('script[src="https://checkout.vipps.no/checkout-button/v1/vipps-checkout-button.js"]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = "https://checkout.vipps.no/checkout-button/v1/vipps-checkout-button.js";
    script.async = true;
    script.type = "text/javascript";

    script.onload = () => {
      setScriptLoaded(true);
    };

    script.onerror = (error) => {
      console.error('Failed to load Vipps Checkout Button script:', error);
    };

    document.body.appendChild(script);


  }, []);

  // if (!scriptLoaded) {
  //   return (
  //     <div
  //       className={`
  //         w-[208px]
  //         h-[44px]
  //         flex items-center justify-center
  //         bg-gray-200 text-gray-700
  //         rounded-[5px]
  //         font-['Vipps_MobilePay_Text'] font-medium text-[18.5px]
  //         ${className}
  //       `}
  //     >
  //       Loading Vipps...
  //     </div>
  //   );
  // }

  return (
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
  );
};

export default VippsButton;


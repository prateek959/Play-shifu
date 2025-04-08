import React from 'react';

const TopBanner = () => {
  return (
    <div className="bg-[#68005f] text-white py-2 overflow-hidden">
      <marquee direction="left" scrollamount="8" loop="infinite" className="text-sm font-medium">
        Never-before offers - Upto 25% OFF! &nbsp;&nbsp; • &nbsp;&nbsp; Never-before offers &nbsp; - &nbsp; Upto 25% OFF! &nbsp;&nbsp; • &nbsp;&nbsp; Never-before offers &nbsp; - &nbsp; Upto 25% OFF! Never-before offers &nbsp; - &nbsp; Upto 25% OFF! &nbsp;&nbsp; • &nbsp;&nbsp; Never-before offers &nbsp; - &nbsp; Upto 25% OFF! &nbsp;&nbsp; • &nbsp;&nbsp;  Never-before offers &nbsp; - &nbsp; Upto 25% OFF!
      </marquee>
    </div>
  );
};

export default TopBanner;

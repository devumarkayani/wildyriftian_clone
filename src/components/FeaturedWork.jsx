import React from 'react';

const FeaturedWork = ({
  topBgColor = "bg-gray-400",
  contentBgColor = "bg-white",
  featuredTabBg = "bg-white",
  featuredTextColor = "text-gray-900",
  seeAllTabBg = "bg-black",
  seeAllTextColor = "text-white",
  featuredWorkText = "FEATURED WORK",
  featuredNumber = "01",
  seeAllText = "SEE ALL WORKS",
  titleText,
  yearText,
  companyText,
  marqueeContent,
  descriptionText,
  viewProjectText = "VIEW PROJECT",
  mainImageUrl,
  gifImageUrl1,
  gifImageUrl2,
  showSeeAll,
  projectLink = "#",
  featureMargin = "ml-0",
  additionalClass = ""
}) => {
  return (
    <div className={`w-full  ${topBgColor} ${additionalClass}`}>
      <div className={`flex flex-col lg: h-[3rem] sm:flex-row ${featureMargin}`}>
        {/* Feature Work Section */}
        <div className={`lg:w-[15rem]   sm:w-auto ${featuredTabBg} border border-transparent rounded-tl-xl rounded-tr-xl sm:rounded-tr-none p-4`}>
          <h1 className={`text-[0.8rem] font-semibold uppercase  ${featuredTextColor}`}>
            {featuredWorkText}
            <span className={featuredTextColor}> {featuredNumber}</span>
          </h1>
        </div>
        <div className={`w-[3rem] h-4 sm:h-auto pr-3 border border-transparent   ${featuredTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)]`}></div>
          {showSeeAll && (<><div className={` w-full sm:w-auto ${seeAllTabBg} border-black  rounded-tl-xl rounded-tr-0xl sm:rounded-tl-xl p-4  lg:w-[20rem]  ml-[33rem]  `}>
          <h1 className={`text-[0.8rem] font-semibold uppercase ${seeAllTextColor} cursor-pointer hover:translate-x-1 transition-transform duration-300 ` }>
            {seeAllText}
            <span className={`text-[0.8rem] font-semibold uppercase ${seeAllTextColor} cursor-pointer hover:translate-x-1 transition-transform duration-300 ` } > →</span>
          </h1>
        </div>
       <div className={`w-[6rem] h-4 sm:h-auto    border border-black   ${seeAllTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)]`}></div></>)}
        
      </div>



      
      {/* Content Section */}
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 sm:p-5 ${contentBgColor} border-b border-dotted border-gray-900`}>
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-[2rem] sm:text-3xl lg:text-[3rem] text-gray-900 leading-tight font-serif">
            {titleText}
          </h2>
        </div>
        {/* Project Meta */}
        <div className="space-y-4">
          <div className="text-[1rem] text-gray-900">
            {yearText}
            <br />
            <span className="font-medium">{companyText}</span>
            <div className="bg-gray-300 text-gray-800 overflow-hidden m-2 w-full">
              <div className="inline-block whitespace-nowrap animate-marquee text-sm">
                {marqueeContent}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Info */}
      <div className={`p-1 sm:p-4 ${contentBgColor}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1 order-3 lg:order-1 m-4">
            <p className="text-[0.5rem] lg:text-[0.8rem] font-serif text-gray-700 leading-relaxed  w-[20rem] ">
              {descriptionText.toUpperCase()}
            </p>
            <a
              href={projectLink}
              className="group inline-flex items-center text-[0.8rem] font-semibold text-gray-900 pt-4 pb-2  hover:pb-3 transition-all duration-400"
            >
              {viewProjectText}
              <span className="ml-3 group-hover:ml-4 transition-all duration-300">→</span>
            </a>
          </div>
          <div className="col-span-1 col-start-1 row-span-1 lg:col-span-1 order-1">
            <img src={mainImageUrl} alt={titleText} className="w-full h-auto rounded-lg" />
          </div>
          <div className="col-span-1 order-2 flex flex-col space-y-2">
            <img src={gifImageUrl1} alt={`${titleText} GIF 1`} className="w-full h-32 sm:h-48 object-cover rounded" />
            <img src={gifImageUrl2} alt={`${titleText} GIF 2`} className="w-full h-32 sm:h-48 object-cover rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
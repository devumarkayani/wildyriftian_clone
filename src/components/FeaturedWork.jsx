// import React from 'react';

// const FeaturedWork = () => {
//   return (
//     <div className="max-w-8xl    lg: bg-gray-400">
//       <div className="flex  lg:flex-row  ">
//         {/* Feature Work  Section */}
//         <div className="flex lg: w-68 lg: bg-white   border-amber-100 rounded-tl-xl rounded-tr-1xl ">
//           <h1 className="text-xl lg:text-1xl font-normal  uppercase text-gray-900 p-1">
//             FEATURED WORK
//             <span className=" text-gray-900"> 01</span>
//           </h1>
//         </div>
//         <div className=" flex     w-17    border-amber-100 rounded-tr-xl   bg-white [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)] "></div>

//         <div className="flex    lg: w-50  ml-155 lg: bg-black   border-amber-100 rounded-tl-xl rounded-tr-1xl  ">
//           <h1 className="text-xl lg:text-1xl font-normal  uppercase text-white p-1   ml-2 group-hover:translate-x-1 transition-transform duration-300">
//             SEE ALL WORKS
//             <span className="  "> →</span>
//           </h1>
//         </div>
//         <div className=" flex     w-10    border-amber-100 rounded-tr-xl   bg-black [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)] "></div>
//       </div>

//       {/* Content Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white  border-b-1 border-dotted ">

//         <div className="lg:col-span-2 space-y-6 ">
//           <h2 className="text-1xl sm:text-3xl lg:text-5xl  text-gray-900 leading-tight">
//             Into the Abyss: 3D Character & Environment Animation
//           </h2>

//           {/*  */}

//           {/* <a
//             href="#"
//             className="group inline-flex items-center text-lg lg:text-xl font-semibold text-gray-900 border-b-2 border-gray-900 pb-2 hover:pb-3 transition-all duration-300"
//           >
//             VIEW PROJECT
//             <span className="ml-3 group-hover:ml-4 transition-all duration-300">→</span>
//           </a> */}
//         </div>

//         {/* Project Meta */}
//         <div className="lg:space-y-8">
//           {/* Year */}
//           <div className=" lg:text-1xl  text-gray-900">
//             2025
//             <br />
//             <span>3D Tech Works</span>
//             <div className="bg-gray-600 text-white    overflow-hidden m-2 ">
//               <div className="inline-block whitespace-nowrap animate-marquee">
//                 3D text molding and the movien
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//        {/* Project Info */}
//         <div className=" m-1 bg-white">

//       <div className="grid lg:grid-cols-3 gap-2">
//         <div className="">
//          <p className=" lg:text-1xl text-gray-800 leading-relaxed lg:leading-relaxed max-w-4xl">
//               DEVELOPED A 3D ANIMATED CHARACTER AND ENVIRONMENT WITH A DEEP-SEA DIVER THEME,
//               EXECUTING THE FULL 3D ANIMATION PIPELINE, INCLUDING CONCEPT DEVELOPMENT,
//               MODELING, TEXTURING, RIGGING, AND ANIMATION.
//             </p>
//             <a
//             href="#"
//             className="group inline-flex items-center text-lg lg:text-1xl font-semibold text-gray-900 pt-4 pb-3 hover:pb-3 transition-all duration-300"
//           >
//             VIEW PROJECT
//             <span className="ml-3 group-hover:ml-4 transition-all duration-300">→</span>
//           </a>
//         </div>
//         <div className="  col-span-1 w-120">
//           <img src="https://framerusercontent.com/images/vJevA68OesjWu0fNiTpOQlSPHE.webp?scale-down-to=1024&width=2000&height=1504"/>

//         </div>
//         <div className=" col-span-1 ml-25"><img src="https://framerusercontent.com/images/XMOCKfKI61qBMf2PeQ1Q4lL8.gif?width=1000&height=563 1000w" alt="" />
//         <img src="https://framerusercontent.com/images/XMOCKfKI61qBMf2PeQ1Q4lL8.gif?width=1000&height=563 1000w" alt=""  /></div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default FeaturedWork;

// import React from "react";

// const FeaturedWork = ({
//   // Background colors
//   topBgColor = "bg-gray-400",
//   contentBgColor = "bg-white",
//   featuredTabBg = "bg-white",
//   featuredTextColor = "text-gray-900",
//   seeAllTabBg = "bg-black",
//   seeAllTextColor = "text-white",

//   // Content data
//   featuredWorkText = "FEATURED WORK",
//   featuredNumber = "01",
//   seeAllText = "SEE ALL WORKS",
//   titleText = "Into the Abyss: 3D Character & Environment Animation",
//   yearText = "2025",
//   companyText = "3D Tech Works",
//   marqueeContent = "3D text molding and the movien",
//   descriptionText = "DEVELOPED A 3D ANIMATED CHARACTER AND ENVIRONMENT WITH A DEEP-SEA DIVER THEME, EXECUTING THE FULL 3D ANIMATION PIPELINE, INCLUDING CONCEPT DEVELOPMENT, MODELING, TEXTURING, RIGGING, AND ANIMATION.",
//   viewProjectText = "VIEW PROJECT",

//   // Images
//   mainImageUrl = "https://framerusercontent.com/images/vJevA68OesjWu0fNiTpOQlSPHE.webp?scale-down-to=1024&width=2000&height=1504",
//   gifImageUrl1 = "https://framerusercontent.com/images/XMOCKfKI61qBMf2PeQ1Q4lL8.gif?width=1000&height=563",
//   gifImageUrl2 = "https://framerusercontent.com/images/XMOCKfKI61qBMf2PeQ1Q4lL8.gif?width=1000&height=563",

//   // Links
//   projectLink = "#",
// }) => {
//   return (
//     <div className={`max-w-8xl    lg: ${topBgColor}`}>
//       <div className="flex  lg:flex-row  ">
//         {/* Feature Work  Section */}
//         <div
//           className={`flex lg: w-68 lg: ${featuredTabBg}   border-amber-100 rounded-tl-xl rounded-tr-1xl `}
//         >
//           <h1
//             className={`text-xl lg:text-1xl font-normal  uppercase ${featuredTextColor} p-1`}
//           >
//             {featuredWorkText}
//             <span className={featuredTextColor}> {featuredNumber}</span>
//           </h1>
//         </div>
//         <div
//           className={` flex     w-17    border-amber-100 rounded-tr-xl   ${featuredTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)] `}
//         ></div>

//         <div
//           className={`flex    lg: w-50  ml-155 lg: ${seeAllTabBg}   border-amber-100 rounded-tl-xl rounded-tr-1xl  `}
//         >
//           <h1
//             className={`text-xl lg:text-1xl font-normal  uppercase ${seeAllTextColor} p-1   ml-2 group-hover:translate-x-1 transition-transform duration-300`}
//           >
//             {seeAllText}
//             <span className="  "> →</span>
//           </h1>
//         </div>
//         <div
//           className={` flex     w-10    border-amber-100 rounded-tr-xl   ${seeAllTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)] `}
//         ></div>
//       </div>

//       {/* Content Section */}
//       <div
//         className={`grid grid-cols-1 lg:grid-cols-3 gap-12 ${contentBgColor}  border-b-1 border-dotted `}
//       >
//         <div className="lg:col-span-2 space-y-6 ">
//           <h2 className="text-1xl sm:text-3xl lg:text-5xl  text-gray-900 leading-tight">
//             {titleText}
//           </h2>
//         </div>

//         {/* Project Meta */}
//         <div className="lg:space-y-8">
//           <div className=" lg:text-1xl  text-gray-900">
//             {yearText}
//             <br />
//             <span>{companyText}</span>
//             <div className="bg-gray-600 text-white    overflow-hidden m-2 ">
//               <div className="inline-block whitespace-nowrap animate-marquee">
//                 {marqueeContent}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Project Info */}
//       <div className={` m-1 ${contentBgColor}`}>
//         <div className="grid lg:grid-cols-3 gap-2">
//           <div className="">
//             <p className=" lg:text-1xl text-gray-800 leading-relaxed lg:leading-relaxed max-w-4xl">
//               {descriptionText}
//             </p>
//             <a
//               href={projectLink}
//               className="group inline-flex items-center text-lg lg:text-1xl font-semibold text-gray-900 pt-4 pb-3 hover:pb-3 transition-all duration-300"
//             >
//               {viewProjectText}
//               <span className="ml-3 group-hover:ml-4 transition-all duration-300">
//                 →
//               </span>
//             </a>
//           </div>
//           <div className="  col-span-1 w-120">
//             <img src={mainImageUrl} />
//           </div>
//           <div className=" col-span-1 ml-25">
//             <img src={gifImageUrl1} alt="" />
//             <img src={gifImageUrl2} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedWork;


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
  titleText = "Into the Abyss: 3D Character & Environment Animation",
  yearText = "2025",
  companyText = "3D Tech Works",
  marqueeContent = "3D text molding and the movien",
  descriptionText = "DEVELOPED A 3D ANIMATED CHARACTER AND ENVIRONMENT WITH A DEEP-SEA DIVER THEME, EXECUTING THE FULL 3D ANIMATION PIPELINE, INCLUDING CONCEPT DEVELOPMENT, MODELING, TEXTURING, RIGGING, AND ANIMATION.",
  viewProjectText = "VIEW PROJECT",
  mainImageUrl = "https://framerusercontent.com/images/vJevA68OesjWu0fNiTpOQlSPHE.webp?scale-down-to=1024&width=2000&height=1504",
  gifImageUrl1 = "https://framerusercontent.com/images/XMOCKfKI61qBMf2PeQ1Q4lL8.gif?width=1000&height=563",
  gifImageUrl2 = "https://framerusercontent.com/images/XMOCKfKI61qBMf2PeQ1Q4lL8.gif?width=1000&height=563",
  projectLink = "#",
  featureMargin="ml-0"
}) => {
  return (
    <div className={`max-w-8xl lg: ${topBgColor}  ` }>
      <div className={`flex lg:flex-row  ${featureMargin}`}>
        {/* Feature Work Section */}
        <div className={`flex lg: w-68  lg: ${featuredTabBg} border-amber-100 rounded-tl-xl rounded-tr-1xl`}>
          <h1 className={`text-xl lg:text-1xl font-normal uppercase ${featuredTextColor} p-1`}>
            {featuredWorkText}
            <span className={featuredTextColor}> {featuredNumber}</span>
          </h1>
        </div>
        <div className={`flex  w-17 border-amber-100 rounded-tr-xl ${featuredTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)]`}></div>

        <div className={`flex lg: w-50 ml-155 lg: ${seeAllTabBg} border-amber-100 rounded-tl-xl rounded-tr-1xl`}>
          <h1 className={`text-xl lg:text-1xl font-normal uppercase ${seeAllTextColor} p-1 ml-2 group-hover:translate-x-1 transition-transform duration-300`}>
            {seeAllText}
            <span> →</span>
          </h1>
        </div>
        <div className={`flex  w-10 border-amber-100 rounded-tr-xl ${seeAllTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)]`}></div>
      </div>

      {/* Content Section */}
      <div className={`grid grid-cols-1 lg:grid-cols-3 pl-5 gap-12 ${contentBgColor} border-b-1 border-dotted`}>
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-1xl sm:text-3xl lg:text-5xl text-gray-900 leading-tight">
            {titleText}
          </h2>
        </div>

        {/* Project Meta */}
        <div className="lg:space-y-8 ">
          <div className="lg:text-1xl  text-gray-900">
            {yearText}
            <br />
            <span>{companyText}</span>
            <div className="bg-gray-600 text-white overflow-hidden m-2">
              <div className="inline-block whitespace-nowrap animate-marquee">
                {marqueeContent}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className={`m-1 ${contentBgColor} pl-6`}>
        <div className="grid lg:grid-cols-3 gap-2">
          <div className="">
            <p className="lg:text-1xl text-gray-800 leading-relaxed lg:leading-relaxed max-w-4xl">
              {descriptionText}
            </p>
            <a 
              href={projectLink} 
              className="group inline-flex items-center text-lg lg:text-1xl font-semibold text-gray-900 pt-4 pb-3 hover:pb-3 transition-all duration-300"
            >
              {viewProjectText}
              <span className="ml-3 group-hover:ml-4 transition-all duration-300">→</span>
            </a>
          </div>
          <div className="col-span-1 w-120"> 
            <img src={mainImageUrl} alt="Main project" />
          </div>
          <div className="col-span-1 ml-25">
            <img src={gifImageUrl1} alt="Project GIF 1" />
            <img src={gifImageUrl2} alt="Project GIF 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Welcome to the Home Page</h2>
      <p>This is a sample home page component in a React TypeScript project.</p>
    </div>
  );
};

export default HomePage;

// import image from "@src/assets/images/home.png";
// //import { Edgital } from "@src/components/Icons/Edgital";
// //import { useGlobalTranslations } from "@src/hooks/translations";
// //import { usePageHeadline } from "@src/hooks/usePageHeadline";
// import {
//   DATA_TEST_HOME_HEADLINE,
//   DATA_TEST_HOME_LOGO,
//   DATA_TEST_HOME_SUBHEADING,
// } from "@";
// import type { FC } from "react";
// import { useEffect } from "react";

// const Home: FC = () => {
//   // const { t } = useGlobalTranslations();
//   // const { setPageHeadline } = usePageHeadline();

//   useEffect(() => {
//     setPageHeadline(t("navigation.home"));

//     () => {
//       setPageHeadline("");
//     };
//   }, []);

//   return (
//     <main className="relative h-full w-full">
//       <img className="h-full w-full object-cover" src={image} alt="" />

//       <div className="absolute inset-0 backdrop-blur-sm" />

//       <div className="absolute top-0 -mt-12 flex h-full w-full flex-col items-center justify-center gap-8 text-white ">
//         <Edgital width={400} fontFill="white" data-test={DATA_TEST_HOME_LOGO} />

//         <h1
//           className="text-8xl"
//           style={{ textShadow: "0 0 4px black" }}
//           data-test={DATA_TEST_HOME_HEADLINE}
//         >
//           Data Hub
//         </h1>

//         <p
//           className="text-2xl"
//           style={{ textShadow: "0 0 6px black" }}
//           data-test={DATA_TEST_HOME_SUBHEADING}
//         >
//           {t("home.subheading")}
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Home;

// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// bg-[#274AB3] 


export default function Home() {
  return ( 
    <div className = "flex flex-col items-center justify-center h-screen gap-4 bg-linear-to-r/srgb from-indigo-600 to-teal-500 ">
      <div className = "text-8xl p-2 font-bold rounded-md transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110">
        <h1 className = "">Quill&apos;s Goods</h1>
      </div>
      <div className = "text-2xl">
        <button className = "bg-white text-indigo-600 px-4 py-2 rounded-lg shadow transition ease-in-out duration-500 hover:bg-indigo-700 hover:text-white">Welcome</button>
      </div>
    </div>
    
    
  );
}

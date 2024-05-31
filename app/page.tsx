import { socialMediaLinks } from "@/constants";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function page() {
  return (
    <div className="bg-[rgb(158,198,233)]">
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          className="rounded-full object-contain"
          src="/images/profile-picture.png"
          alt="profile-picture"
          width={96}
          height={96}
        />

        <h1 className={`${poppins.className} text-2xl text-center`}>
          Mehmetcan Bozkuş
        </h1>

        <div className="border-4 border-black rounded-[15px] h-16 flex items-center justify-center px-4">
          <div className="flex justify-center space-x-4">
            {socialMediaLinks.map((socialMedia) => (
              <Link key={socialMedia.url} href={socialMedia.url}>
                <Image
                  src={socialMedia.imageSrc}
                  alt={socialMedia.alt}
                  width={42}
                  height={42}
                />
              </Link>
            ))}
          </div>
        </div>
        <a className="my-2" href="MehmetcanBozkus_CV.pdf" target="_blank">
          <button className="bg-green-400 hover:bg-green-600 rounded-lg duration-300 text-gray-800 font-bold py-2 px-4 inline-flex items-center">
            <Image
              src="/images/download.png"
              alt="download"
              width={32}
              height={32}
            />
            <span className="pl-2">CV</span>
          </button>
        </a>
      </div>
    </div>
  );
}

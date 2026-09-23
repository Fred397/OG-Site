import Image from "next/image";
import logoImg from "@/assets/logo.png";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f19] px-6">
      <div className="flex flex-col items-center gap-5">
        <Image
          src={logoImg}
          alt="Opus Geeks"
          width={72}
          height={72}
          priority
        />
        <span className="h-1 w-16 overflow-hidden bg-slate-800 rounded-full">
          <span className="block h-full w-1/2 animate-pulse bg-[#00aeef]" />
        </span>
      </div>
    </div>
  );
}
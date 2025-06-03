import Image from "next/image";

export default function BrandBar() {
  return (
    <>
      <Image
        src="/mercado-libre.svg"
        alt="Mercado Libre Logo"
        width={32}
        height={32}
        className="inline-block"
        priority
      />
      <span className="text-lg font-semibold text-gray-800">
        Mercado Corrientes
      </span>
    </>
  );
}

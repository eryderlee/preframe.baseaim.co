import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative z-10 pt-8 pb-4 flex justify-center">
      <Image
        src="/images/logo-black.png"
        alt="Baseaim"
        width={160}
        height={48}
        priority
        className="h-10 w-auto md:h-12"
      />
    </header>
  )
}

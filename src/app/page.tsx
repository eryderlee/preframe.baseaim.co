import GradientBG from '@/components/GradientBG'
import Header from '@/components/Header'
import VideoPlayer from '@/components/VideoPlayer'
import ExpectationsList from '@/components/ExpectationsList'
import Footer from '@/components/Footer'

export default function PreframePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBG />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container mx-auto px-6 py-12 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold text-text-charcoal mb-4 leading-tight">
              Before Your{' '}
              <span className="font-dm-serif italic bg-gradient-to-r from-sky-blue via-medium-blue to-bright-blue bg-clip-text text-transparent">
                Strategy Call
              </span>
            </h1>
            <p className="font-inter text-text-medium-gray text-base md:text-lg leading-relaxed">
              Thanks for booking a call with our team. Please watch this short
              video so we can make the most of our time together.
            </p>
          </div>

          <div className="mb-16 md:mb-20">
            <VideoPlayer src="/videos/preframe.mp4" />
          </div>

          <div className="text-center mb-8">
            <h2 className="font-montserrat text-2xl md:text-3xl font-semibold text-text-charcoal mb-3">
              What to Expect on the Call
            </h2>
            <p className="font-inter text-text-light-gray text-base max-w-xl mx-auto mb-8">
              Here&apos;s a quick overview of what we&apos;ll cover together.
            </p>
          </div>

          <ExpectationsList />
        </main>

        <Footer />
      </div>
    </div>
  )
}

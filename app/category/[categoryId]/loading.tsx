import SharedLinkBanner from '@/components/shared/SharedLinkBanner'
import SummaryLoader from '@/components/shared/SummaryCard/SummaryLoader'

export default function Loading() {
  return (
    <>
      <SharedLinkBanner />
      <div className="w-full lg:pt-48 pt-24 min-h-screen lg:px-52 flex lg:justify-start justify-center items-start lg:gap-24 gap-12 flex-wrap">
        <SummaryLoader />
        <SummaryLoader />
        <SummaryLoader />
        <SummaryLoader />
      </div>
    </>
  )
}

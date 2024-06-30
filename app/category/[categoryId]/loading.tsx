import SharedLinkBanner from '@/components/shared/SharedLinkBanner'
import SummaryLoader from '@/components/shared/SummaryCard/SummaryLoader'

export default function Loading() {
  return (
    <>
      <SharedLinkBanner />
      <div className="w-full pt-48 min-h-screen px-52 flex justify-start items-start gap-24 flex-wrap">
        <SummaryLoader />
        <SummaryLoader />
        <SummaryLoader />
        <SummaryLoader />
      </div>
    </>
  )
}

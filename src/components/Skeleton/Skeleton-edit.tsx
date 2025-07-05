import { Skeleton } from "../ui/skeleton";

export default function SkeletonEdit() {
  return (
    <div className="w-full flex flex-col space-y-3 gap-3">
      <Skeleton className="h-[40px] w-[100%] rounded-xl" />
      <div className='flex flex-row gap-2'>
        {Array.from({ length: 5 }, (index) =>
          <Skeleton key='Skeleton' className="h-8 w-[100%]" />)
        }
      </div>
      <Skeleton className="h-[40px] w-[100%] rounded-xl" />
      <div className="w-full flex flex-row space-y-3 gap-3">
        {Array.from({ length: 2 }, () =>
          <Skeleton key='Skeleton' className="h-48 w-[100%]" />)
        }
      </div>
    </div>
  )
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import * as React from 'react'

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs z-10">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center w-full h-64 bg-gray-200 dark:bg-gray-700"
          >
            <div className="p-1">TESTE</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

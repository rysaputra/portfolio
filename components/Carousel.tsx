import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const publicFolder = "/images";

export function CarouselDemo() {
  return (
    <Carousel className="w-full flex max-w-lg bg-cover border-0 max-lg:min-w-full">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex animate-pulse aspect-square items-center flex-center p-6 max-lg:aspect-video flex-center">
                  <div className="h-full w-full">
                    <Image
                      src={`${publicFolder}/content${index + 1 }.jpg`}
                      className="h-full rounded-md"
                      width={600}
                      height={900}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

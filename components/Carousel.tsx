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
    <Carousel className="w-full pt-6 flex bg-cover border-0">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex animate-pulse aspect-video p-6 flex-center">
                  <div className="w-full h-full">
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
    </Carousel>
  );
}

"use client"
import Image from "next/image"

export default function ImgComponent() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Column 1 */}
          <div className="grid gap-4">
            <div className="h-64 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/2.jpg"
                alt="gallery-photo"
                width={400}
                height={256}
              />
            </div>
            <div className="h-80 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/2.jpg"
                alt="gallery-photo"
                width={400}
                height={320}
              />
            </div>
            <div className="h-48 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/3.jpg"
                alt="gallery-photo"
                width={400}
                height={192}
              />
            </div>
          </div>
          {/* Column 2 */}
          <div className="grid gap-4">
            <div className="h-48 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/4.jpg"
                alt="gallery-photo"
                width={400}
                height={192}
              />
            </div>
            <div className="h-72 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/5.jpg"
                alt="gallery-photo"
                width={400}
                height={288}
              />
            </div>
            <div className="h-56 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/6.jpg"
                alt="gallery-photo"
                width={400}
                height={224}
              />
            </div>
          </div>
          {/* Column 3 */}
          <div className="grid gap-4">
            <div className="h-72 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/7.jpg"
                alt="gallery-photo"
                width={400}
                height={288}
              />
            </div>
            <div className="h-48 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/8.jpg"
                alt="gallery-photo"
                width={400}
                height={192}
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/1.jpg"
                alt="gallery-photo"
                width={400}
                height={256}
              />
            </div>
          </div>
          {/* Column 4 */}
          <div className="grid gap-4">
            <div className="h-56 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/2.jpg"
                alt="gallery-photo"
                width={400}
                height={224}
              />
            </div>
            <div className="h-80 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/3.jpg"
                alt="gallery-photo"
                width={400}
                height={320}
              />
            </div>
            <div className="h-48 overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                src="/images/4.jpg"
                alt="gallery-photo"
                width={400}
                height={192}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client";

import { Card } from "@/component/card";
import { SplineScene } from "@/component/splite";
import SphereImageGrid, { ImageData } from "../component/img-sphere";
// 이미지 import
import image1 from "../image/1_0927.png";
import image2 from "../image/2_0929.png";
import image3 from "../image/3_1005.png";
import image4 from "../image/4_1027.png";
import image5 from "../image/5_1029.png";
import image6 from "../image/6_1103.png";
import image7 from "../image/7_1110.png";
import image8 from "../image/8_1117.png";

// ==========================================
// EASY CONFIGURATION - Edit these values to customize the component
// ==========================================

// 이미지 경로를 한 번만 계산하여 정적으로 캐싱 (remount 시 재요청 방지)
const IMAGE_SOURCES = {
  image1: image1.src,
  image2: image2.src,
  image3: image3.src,
  image4: image4.src,
  image5: image5.src,
  image6: image6.src,
  image7: image7.src,
  image8: image8.src,
} as const;

// Image data using project assets - duplicated to fill sphere better
const BASE_IMAGES: Omit<ImageData, "id">[] = [
  {
    src: IMAGE_SOURCES.image1,
    alt: "1_0927.png",
    title: "첫만남...",
    description: "저희가 만난 첫 날, 멘티들과 함께 찍은 사진입니다.",
  },
  {
    src: IMAGE_SOURCES.image2,
    alt: "2_0929.png",
    title: "멘티들과 함께 찍은 사진입니다.",
    description: "저희가 만난 두 번째 날, 멘티들과 함께 찍은 사진입니다.",
  },
  {
    src: IMAGE_SOURCES.image3,
    alt: "3_1005.png",
    title: "멘티들과 함께 찍은 사진입니다.",
    description: "저희가 만난 세 번째 날, 멘티들과 함께 찍은 사진입니다.",
  },
  {
    src: IMAGE_SOURCES.image4,
    alt: "4_1027.png",
    title: "멘티들과 함께 찍은 사진입니다.",
    description: "저희가 만난 네 번째 날, 멘티들과 함께 찍은 사진입니다.",
  },
  {
    src: IMAGE_SOURCES.image5,
    alt: "5_1029.png",
    title: "멘티들과 함께 찍은 사진입니다.",
    description: "저희가 만난 다섯 번째 날, 멘티들과 함께 찍은 사진입니다.",
  },
  {
    src: IMAGE_SOURCES.image6,
    alt: "6_1103.png",
    title: "멘티들과 함께 찍은 사진입니다.",
    description: "저희가 만난 여섯 번째 날, 멘티들과 함께 찍은 사진입니다.",
  },
  {
    src: IMAGE_SOURCES.image7,
    alt: "7_1110.png",
    title: "멘티들과 함께 찍은 사진입니다.",
    description: "저희가 만난 일곱 번째 날, 멘티들과 함께 찍은 사진입니다.",
  },
  {
    src: IMAGE_SOURCES.image8,
    alt: "8_1117.png",
    title: "멘티들과 함께 찍은 사진입니다.",
    description: "저희가 만난 여덟 번째 날, 멘티들과 함께 찍은 사진입니다.",
  },
];

// Generate more images by repeating the base set
const IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  const baseIndex = i % BASE_IMAGES.length;
  const baseImage = BASE_IMAGES[baseIndex];
  IMAGES.push({
    id: `img-${i + 1}`,
    ...baseImage,
    alt: `${baseImage.alt} (${Math.floor(i / BASE_IMAGES.length) + 1})`,
  });
}

// Component configuration - easily adjustable
interface SphereConfig {
  containerSize: number;
  sphereRadius: number;
  dragSensitivity: number;
  momentumDecay: number;
  maxRotationSpeed: number;
  baseImageScale: number;
  hoverScale: number;
  perspective: number;
  autoRotate: boolean;
  autoRotateSpeed: number;
}

const CONFIG: SphereConfig = {
  containerSize: 600, // Container size in pixels
  sphereRadius: 200, // Virtual sphere radius (increased for better spacing)
  dragSensitivity: 0.8, // Mouse drag sensitivity (0.1 - 2.0)
  momentumDecay: 0.96, // How fast momentum fades (0.8 - 0.99)
  maxRotationSpeed: 6, // Maximum rotation speed (1 - 10)
  baseImageScale: 0.15, // Base image size (reduced to minimize overlap)
  hoverScale: 1.3, // Hover scale multiplier (1.0 - 2.0)
  perspective: 1000, // CSS perspective value (500 - 2000)
  autoRotate: true, // Enable/disable auto rotation
  autoRotateSpeed: 0.2, // Auto rotation speed (0.1 - 2.0, higher = faster)
};

export default function Home() {
  return (
    <Card className="w-full h-screen bg-black relative overflow-y-auto">
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-neutral-300">
            정바융멘토멘티CSE4입니다.
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg text-2xl font-semibold">
            저희가 만 든 웹 페 이 지 입니다.
          </p>
          <p className="text-neutral-300 max-w-lg text-2xl">
            까불지 마세욘 디이이이ㅣ지기 싫으면
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
      <SphereImageGrid images={IMAGES} {...CONFIG} />
    </Card>
  );
}

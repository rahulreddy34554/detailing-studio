"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Page = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col">
            {/* Background Image */}
            <div className="relative w-full h-[80vh]">
                <Image
                    src="https://png.pngtree.com/background/20230414/original/pngtree-speeding-racing-car-neon-illustration-background-picture-image_2424792.jpg"
                    alt="Car Wrapping"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-70" />

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-6xl font-extrabold drop-shadow-lg">Galleries</h1>
                </div>
            </div>

            {/* Gallery Section */}
            <Gallery />
        </div>
    );
};

export default Page;

function Gallery() {
    const images = [
        "https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp",
        "https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_1_v3.jpg",
        "https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_2_v3.jpg",
        "https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_3_v3.jpg",
        "https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp",
        "https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp",
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-bold text-center mb-8">Our Gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            width={500}
                            height={500}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
                    <Dialog.Panel className="relative max-w-4xl w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white"
                        >
                            <X size={30} />
                        </button>

                        <div className="flex items-center justify-center">
                            <button
                                onClick={prevImage}
                                className="absolute left-4 text-white p-2 bg-black bg-opacity-50 rounded-full"
                            >
                                <ChevronLeft size={30} />
                            </button>

                            <Image
                                src={images[currentIndex]}
                                alt="Selected Image"
                                width={800}
                                height={600}
                                className="rounded-lg"
                            />

                            <button
                                onClick={nextImage}
                                className="absolute right-4 text-white p-2 bg-black bg-opacity-50 rounded-full"
                            >
                                <ChevronRight size={30} />
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}

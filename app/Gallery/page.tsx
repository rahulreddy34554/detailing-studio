import React from 'react'
import Image from 'next/image'

const page = () => {
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

        
        <GALLERY/>
        </div>
    )
}

export default page



function GALLERY() {
    const images = [
        'https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp',
        'https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp',
        'https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp',
        'https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp',
        'https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp',
        'https://wrapstylesydney.com.au/wp-content/uploads/2024/07/1716642496-2295-Volvo-XC40-Matte-Paint-Protection-Wrapstyle-jpeg.webp',
        
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img 
                            src={src} 
                            alt={`Gallery Image ${index + 1}`} 
                            className="w-full h-64 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}



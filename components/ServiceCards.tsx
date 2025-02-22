import Image from 'next/image';

const services = [
  { title: 'CAR WRAPPING', image: 'https://media.istockphoto.com/id/1161233893/vector/sport-car-decal-wrap-design-vector-graphic-abstract-stripe-racing-background-kit-designs-for.jpg?s=612x612&w=0&k=20&c=rw5YKlGXnYfSY5LmVZDQbIMfr9tN0jHdmK_Jt-UsinQ=', icon: 'https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/services/services_01_wrapping_icon-1.png' },
  { title: 'PAINT PROTECTION', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5wrAU6zmQ1j5yOR4JewcvjjU1wR95gDv1g&s', icon: 'https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/services/services_02_protection_icon-1.png' },
  { title: 'COLOUR PPF', image: 'https://media.istockphoto.com/id/1446278856/vector/racing-car-wrap-design-vector-for-race-car-graphic-abstract-stripe-racing-background-kit.jpg?s=612x612&w=0&k=20&c=5dW5KMgL8DdrTLQzoTfGWoymWAzDMYamDwtyDLAkUNg=', icon: 'https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/services/services_04_tinting_icon-1.png' },
 
  
];

export default function ServiceCards() {
  return (
    <div className="w-full bg-black py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-0">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                <h3 className="text-white text-lg font-bold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

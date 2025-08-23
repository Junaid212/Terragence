import React from "react";
import { Zap, Cog, Activity, Stethoscope, ChevronRight, Globe, Shield, Truck, Headphones } from "lucide-react";

export default function Products() {
  const productCategories = [
    {
      title: "Electrical",
      icon: Zap,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      images: [
        "img/3.webp",
        "img/1.webp",
        "img/2.webp",
        "img/4.webp"
      ],
      products: ["Circuit Breakers", "Junction Boxes (JBs)", "Cable Glands", "Cable Trays", "Push Buttons", "Transformers", "Power Supply Modules"]
    },
    {
      title: "Mechanical", 
      icon: Cog,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      images: [
        "img/5.webp",
        "img/6.webp",
        "img/8.webp",
        "img/7.webp"
      ],
      products: ["RO Membranes", "Strainers", "Pumps", "Motors", "Filters", "Gaskets", "Expansion Joints"]
    },
    {
      title: "Instruments",
      icon: Activity,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50",
      images: [
        "img/9.webp",
        "img/10.webp",
        "img/12.webp",
        "img/11.webp"
      ],
      products: ["Field Instruments", "Calibration Equipment", "Instrument Cables", "Analyzers", "VFDs", "Instrument Valves & Tubings", "Vibration Instruments"]
    },
    {
      title: "Medical Instruments",
      icon: Stethoscope,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      images: [
        "img/14.webp",
        "img/16.webp",
        "img/15.webp",
        "img/13.webp"
      ],
      products: ["Weighing Balances", "Shakers", "Pipettes", "Vortex Mixers", "Stirring Heaters", "Incubators", "Medical Devices"]
    }
  ];

  const services = [
    { icon: Globe, title: "Global Sourcing", description: "From trusted suppliers worldwide" },
    { icon: Shield, title: "Quality Checks", description: "Strict quality assurance processes" },
    { icon: Truck, title: "Fast Delivery", description: "Reliable and timely shipping" },
    { icon: Headphones, title: "Customer Support", description: "End-to-end customer service" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Custom Header Div with Background Image */}
      <div 
        className="relative py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('img/banner 3.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Products & Services
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            A comprehensive range of high-quality products and support services to meet your industrial needs.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {productCategories.map((category) => (
              <div key={category.title} className={`${category.bgColor} p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Left Side: Info */}
                  <div className="md:order-1">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <category.icon className={`w-8 h-8 md:w-10 md:h-10 ${category.iconColor}`} />
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">{category.title}</h3>
                    </div>

                    {/* Products List */}
                    <ul className="space-y-2 md:space-y-3">
                      {category.products.map((product) => (
                        <li key={product} className="flex items-center gap-2 md:gap-3 text-slate-700">
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side: 4 Images in Grid */}
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 h-48 md:h-64 md:order-2">
                    <img 
                      src={category.images[0]} 
                      alt={`${category.title} product 1`} 
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                    <img 
                      src={category.images[1]} 
                      alt={`${category.title} product 2`} 
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                    <img 
                      src={category.images[2]} 
                      alt={`${category.title} product 3`} 
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                    <img 
                      src={category.images[3]} 
                      alt={`${category.title} product 4`} 
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Our Value-Added Services</h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-slate-600">Beyond products, we provide end-to-end support.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 md:p-8 text-center rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-blue-800 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function PropertyDetail({ params }: { params: { id: string } }) {
  // Mock data for the property based on id or static mock
  const property = {
    title: "Departamento Skyline",
    location: "Centro Financiero",
    address: "Av. Principal 123, Piso 25, Madrid",
    price: "$285,000",
    status: "Venta",
    specs: {
      beds: 3,
      baths: 2,
      area: 120,
      parking: 2,
      year: 2023,
    },
    description: "Extraordinario departamento en la cumbre del Centro Financiero. Ofrece vistas panorámicas inigualables a la ciudad desde el piso 25. Sus ventanales de piso a techo y finos acabados en mármol y maderas nobles brindan un estándar de vida premium. Cuenta con comodidades excepcionales y espacios diseñados para el máximo confort y lujo.",
    amenities: [
      "Piscina Climatizada",
      "Gimnasio de Alta Tecnología",
      "Seguridad 24/7",
      "Lobby de lujo",
      "Terraza Privada",
      "Sistema Casa Inteligente"
    ],
    images: [
      "/images/property_1_modern_1775503491892.png",
      "/images/property_1_bedroom_1775504207140.png",
      "/images/property_1_kitchen_1775504240340.png",
      "/images/property_1_bathroom_1775504223722.png",
    ]
  };

  return (
    <main className="min-h-screen flex flex-col font-sans bg-white pb-24">
      {/* NAVEGACIÓN SENCILLA */}
      <header className="w-full z-50 bg-[#151E2D] border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="font-serif text-2xl tracking-widest font-bold text-white">
              ÉLITE <span className="text-[#C5A059]">INMOBILIARIA</span>
            </h1>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-200">
            <Link href="/#propiedades" className="hover:text-[#C5A059] transition-colors">Volver a Propiedades</Link>
          </nav>
        </div>
      </header>

      {/* GALERÍA DE IMÁGENES */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#151E2D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{property.status}</span>
              <span className="text-[#C5A059] font-medium flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {property.location}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#151E2D]">{property.title}</h1>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Precio</div>
            <div className="text-4xl font-bold text-[#C5A059]">{property.price}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[60vh]">
          {/* Main Photo */}
          <div className="md:col-span-2 md:row-span-2 relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden group">
            <Image src={property.images[0]} alt="Principal" fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
          </div>
          {/* Other Photos */}
          {property.images.slice(1).map((img, idx) => (
            <div key={idx} className={`relative rounded-2xl overflow-hidden group ${idx === 2 ? 'md:col-span-2 h-[200px] md:h-[292px]' : 'h-[200px] md:h-[292px]'}`}>
              <Image src={img} alt={`Vista ${idx+1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            {/* Especificaciones Top */}
            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-gray-200 mb-10 text-[#151E2D]">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                <div>
                  <div className="font-bold text-xl">{property.specs.beds}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Habitaciones</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14V6a2 2 0 012-2h12a2 2 0 012 2v8l-2-2-4 4-4-4-6 6" /></svg>
                <div>
                  <div className="font-bold text-xl">{property.specs.baths}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Baños</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                <div>
                  <div className="font-bold text-xl">{property.specs.area} m²</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Superficie</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                <div>
                  <div className="font-bold text-xl">{property.specs.parking}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Estacionamientos</div>
                </div>
              </div>
            </div>

            {/* Price (Mobile only) */}
            <div className="block md:hidden mb-8">
              <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Precio</div>
              <div className="text-4xl font-bold text-[#C5A059]">{property.price}</div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#151E2D] mb-6">Descripción de la Propiedad</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-12">
              {property.description}
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#151E2D] mb-6">Comodidades y Detalles</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {property.amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#C5A059]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-[#151E2D] rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="font-serif text-2xl font-bold mb-2">Pide información</h3>
              <p className="text-gray-400 text-sm mb-6">Nuestro experto en bienes raíces VIP te contactará a la brevedad.</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Nombre completo" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors text-white placeholder-gray-400" />
                <input type="email" placeholder="Correo electrónico" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors text-white placeholder-gray-400" />
                <input type="tel" placeholder="Teléfono celular" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors text-white placeholder-gray-400" />
                <textarea placeholder="Mensaje o consulta" rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors text-white placeholder-gray-400"></textarea>
                <button type="submit" className="w-full bg-[#C5A059] hover:bg-[#b08d4b] text-white py-4 rounded-lg font-bold transition-colors shadow-lg">
                  Solicitar Asesoría
                </button>
              </form>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Tu información está 100% protegida.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

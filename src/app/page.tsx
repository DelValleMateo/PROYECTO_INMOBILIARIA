import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* HEADER */}
      <header className="fixed w-full z-50 bg-[#151E2D]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-2xl tracking-widest font-bold">
              ÉLITE <span className="text-[#C5A059]">INMOBILIARIA</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-200">
            <a href="#" className="hover:text-[#C5A059] transition-colors">Inicio</a>
            <Link href="/propiedades" className="hover:text-[#C5A059] transition-colors">Propiedades</Link>
            <a href="#servicios" className="hover:text-[#C5A059] transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-[#C5A059] transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-[#C5A059] transition-colors">Contacto</a>
          </nav>
          <div className="hidden lg:flex items-center gap-2 text-[#C5A059] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +34 912 345 678
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_background_1775503475267.png"
            alt="Luxury Real Estate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#151E2D]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#151E2D]/80 via-transparent to-[#151E2D]"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-[#C5A059] tracking-[0.2em] text-sm md:text-base font-semibold mb-6 uppercase">
            Bienes Raíces de Lujo
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            Encuentra tu hogar <br />
            <span className="text-[#C5A059]">ideal</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Departamentos exclusivos en venta y alquiler en las mejores ubicaciones de la ciudad.
          </p>



          {/* STATS */}
          <div className="grid grid-cols-3 gap-8 mt-20 w-full max-w-3xl border-t border-white/10 pt-10">
            <div className="text-center">
              <div className="text-4xl font-serif text-[#C5A059] font-bold mb-1">500+</div>
              <div className="text-sm text-gray-300">Propiedades</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#C5A059] font-bold mb-1">12+</div>
              <div className="text-sm text-gray-300">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#C5A059] font-bold mb-1">2,000+</div>
              <div className="text-sm text-gray-300">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPIEDADES DESTACADAS */}
      <section id="propiedades" className="py-24 bg-[#FAFAFA] text-[#151E2D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] tracking-widest text-sm font-semibold uppercase">Nuestro Portafolio</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">Propiedades Destacadas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="relative h-64 overflow-hidden">
                <Image src="/images/property_1_modern_1775503491892.png" alt="Property 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#C5A059] text-white text-xs font-bold px-3 py-1 rounded-full">Venta</div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Departamento Skyline</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Centro Financiero, Piso 25
                </p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                  <span className="flex items-center gap-1"><span className="font-medium">3</span> Hab</span>
                  <span className="flex items-center gap-1"><span className="font-medium">2</span> Baños</span>
                  <span className="flex items-center gap-1"><span className="font-medium">120</span> m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#C5A059] font-bold text-2xl">$285,000</span>
                  <Link href="/propiedades/1" className="text-[#151E2D] font-semibold hover:text-[#C5A059] transition-colors flex items-center gap-2">
                    Ver detalles <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image src="/images/property_2_pool_1775503506999.png" alt="Property 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#C5A059] text-white text-xs font-bold px-3 py-1 rounded-full">Venta</div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Penthouse Panorámico</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Zona Dorada, Piso 40
                </p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                  <span className="flex items-center gap-1"><span className="font-medium">4</span> Hab</span>
                  <span className="flex items-center gap-1"><span className="font-medium">3</span> Baños</span>
                  <span className="flex items-center gap-1"><span className="font-medium">210</span> m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#C5A059] font-bold text-2xl">$520,000</span>
                  <Link href="/propiedades/1" className="text-[#151E2D] font-semibold hover:text-[#C5A059] transition-colors flex items-center gap-2">
                    Ver detalles <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* CARD 3 - Placeholder mock */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image src="/images/hero_background_1775503475267.png" alt="Property 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#151E2D] text-white text-xs font-bold px-3 py-1 rounded-full">Alquiler</div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Estudio Garden View</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Barrio Verde, Piso 5
                </p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                  <span className="flex items-center gap-1"><span className="font-medium">1</span> Hab</span>
                  <span className="flex items-center gap-1"><span className="font-medium">1</span> Baños</span>
                  <span className="flex items-center gap-1"><span className="font-medium">55</span> m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#C5A059] font-bold text-2xl">$850<span className="text-base text-gray-500 font-normal">/mes</span></span>
                  <Link href="/propiedades/1" className="text-[#151E2D] font-semibold hover:text-[#C5A059] transition-colors flex items-center gap-2">
                    Ver detalles <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-16 text-center">
            <Link href="/propiedades" className="inline-block bg-white text-[#151E2D] border-2 border-[#151E2D] hover:bg-[#151E2D] hover:text-white px-8 py-3 rounded-lg font-bold transition-all shadow-sm hover:shadow-lg">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      {/* NUESTROS SERVICIOS */}
      <section id="servicios" className="py-24 bg-white text-[#151E2D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] tracking-widest text-sm font-semibold uppercase">Lo Que Hacemos</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">Nuestros Servicios</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Venta de Departamentos</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Amplio catálogo de departamentos en las zonas más exclusivas de la ciudad.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Alquiler Residencial</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Opciones de alquiler flexible con contratos a corto y largo plazo.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Inversión Inmobiliaria</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Asesoría experta para maximizar el retorno de tu inversión.</p>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Asesoría Legal</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Acompañamiento jurídico completo en cada transacción.</p>
            </div>
            {/* Service 5 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h5" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Administración</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Gestión integral de propiedades para propietarios e inversores.</p>
            </div>
            {/* Service 6 */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Atención Personalizada</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Servicio dedicado con agentes especializados para cada cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="py-24 bg-[#151E2D] relative overflow-hidden text-white">
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-[#C5A059] tracking-widest text-sm font-semibold uppercase">Sobre Nosotros</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-8">
              Tu socio de confianza en <span className="text-[#C5A059]">bienes raíces</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Con más de 12 años en el mercado inmobiliario, nos hemos consolidado como la inmobiliaria líder en la venta y alquiler de departamentos de alta gama. Nuestro equipo de profesionales te acompaña en cada paso del proceso.
            </p>
            <p className="text-gray-300 leading-relaxed mb-10">
              Creemos que encontrar el hogar perfecto es más que una transacción: es el inicio de una nueva etapa. Por eso, ofrecemos un servicio integral y personalizado que se adapta a las necesidades únicas de cada cliente.
            </p>
            <button className="bg-[#C5A059] hover:bg-[#b08d4b] text-white px-8 py-4 rounded-lg font-medium transition-colors">
              Conoce más sobre nosotros
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-[#C5A059] mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h5" /></svg>
              </div>
              <div className="text-3xl font-serif text-[#C5A059] font-bold mb-2">500+</div>
              <div className="text-sm text-gray-400">Propiedades vendidas</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-[#C5A059] mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div className="text-3xl font-serif text-[#C5A059] font-bold mb-2">2,000+</div>
              <div className="text-sm text-gray-400">Clientes felices</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-[#C5A059] mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <div className="text-3xl font-serif text-[#C5A059] font-bold mb-2">12</div>
              <div className="text-sm text-gray-400">Años de experiencia</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-[#C5A059] mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <div className="text-3xl font-serif text-[#C5A059] font-bold mb-2">4.9</div>
              <div className="text-sm text-gray-400">Calificación promedio</div>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-white text-[#151E2D]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] tracking-widest text-sm font-semibold uppercase">Contacto</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">¿Listo para encontrar tu hogar?</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9F6F0] text-[#C5A059] rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Teléfono</div>
                  <div className="font-medium text-lg">+34 912 345 678</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9F6F0] text-[#C5A059] rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Email</div>
                  <div className="font-medium text-lg">info@eliteinmobiliaria.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F9F6F0] text-[#C5A059] rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Dirección</div>
                  <div className="font-medium text-lg">Av. de la Constitución 45, Madrid</div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Nombre" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors" />
                <input type="text" placeholder="Apellido" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors" />
                <input type="email" placeholder="Email" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors md:col-span-2" />
                <input type="tel" placeholder="Teléfono" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors md:col-span-2" />
                <textarea placeholder="Mensaje" rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#C5A059] transition-colors md:col-span-2"></textarea>
                <button type="submit" className="md:col-span-2 bg-[#151E2D] hover:bg-[#1f2838] text-white px-8 py-4 rounded-lg font-medium transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#151E2D] text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif text-2xl font-bold tracking-widest text-center md:text-left">
              ÉLITE <span className="text-[#C5A059]">INMOBILIARIA</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Élite Inmobiliaria. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}

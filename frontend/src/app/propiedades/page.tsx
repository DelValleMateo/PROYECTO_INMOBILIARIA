"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PROPERTIES = [
  {
    id: 1,
    title: "Departamento Skyline",
    location: "Centro Financiero, Piso 25",
    type: "Venta",
    price: "$285,000",
    beds: 3,
    baths: 2,
    area: 120,
    ambientes: 4,
    image: "/images/property_1_modern_1775503491892.png"
  },
  {
    id: 2,
    title: "Penthouse Panorámico",
    location: "Zona Dorada, Piso 40",
    type: "Venta",
    price: "$520,000",
    beds: 4,
    baths: 3,
    area: 210,
    ambientes: 6,
    image: "/images/property_2_pool_1775503506999.png"
  },
  {
    id: 3,
    title: "Estudio Garden View",
    location: "Barrio Verde, Piso 5",
    type: "Alquiler",
    price: "$850/mes",
    beds: 1,
    baths: 1,
    area: 55,
    ambientes: 1,
    image: "/images/hero_background_1775503475267.png"
  },
  {
    id: 4,
    title: "Villa Mediterránea",
    location: "Afueras, Zona Norte",
    type: "Venta",
    price: "$890,000",
    beds: 5,
    baths: 4,
    area: 350,
    ambientes: 8,
    image: "/images/property_1_bedroom_1775504207140.png"
  },
  {
    id: 5,
    title: "Loft Empresarial",
    location: "Centro Histórico",
    type: "Alquiler",
    price: "$1,200/mes",
    beds: 1,
    baths: 2,
    area: 90,
    ambientes: 2,
    image: "/images/property_1_kitchen_1775504240340.png"
  },
  {
    id: 6,
    title: "Residencia Gold",
    location: "Barrio las Quintas",
    type: "Venta",
    price: "$450,000",
    beds: 3,
    baths: 3,
    area: 180,
    ambientes: 5,
    image: "/images/property_1_bathroom_1775504223722.png"
  }
];

export default function Propiedades() {
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [ambientesFiltro, setAmbientesFiltro] = useState("");
  const [superficieFiltro, setSuperficieFiltro] = useState("");

  const RANGOS_SUPERFICIE = [
    { label: "Hasta 70 m²",    min: 0,   max: 70  },
    { label: "70 – 120 m²",   min: 70,  max: 120 },
    { label: "120 – 200 m²",  min: 120, max: 200 },
    { label: "Más de 200 m²", min: 200, max: Infinity },
  ];

  const propiedadesFiltradas = PROPERTIES.filter((p) => {
    const matchTipo = tipoFiltro === "" || p.type === tipoFiltro;
    const matchAmbientes =
      ambientesFiltro === "" || p.ambientes === parseInt(ambientesFiltro);
    const rango = RANGOS_SUPERFICIE.find((r) => r.label === superficieFiltro);
    const matchSuperficie =
      !rango || (p.area >= rango.min && p.area < rango.max);
    return matchTipo && matchAmbientes && matchSuperficie;
  });

  const ambientesUnicos = [...new Set(PROPERTIES.map((p) => p.ambientes))].sort(
    (a, b) => a - b
  );

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#FAFAFA] pb-24">
      {/* HEADER */}
      <header className="w-full z-50 bg-[#151E2D] border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="font-serif text-2xl tracking-widest font-bold text-white">
              ÉLITE <span className="text-[#C5A059]">INMOBILIARIA</span>
            </h1>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-200">
            <Link href="/" className="hover:text-[#C5A059] transition-colors">Volver a Inicio</Link>
          </nav>
        </div>
      </header>

      {/* TÍTULO */}
      <section className="bg-white py-16 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#C5A059] tracking-widest text-sm font-semibold uppercase">Catálogo Completo</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-[#151E2D]">Descubre tu próximo hogar</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explora toda nuestra cartera de propiedades de lujo disponibles para venta y alquiler.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <div className="container mx-auto px-6 mt-10">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            {/* Filtro: Tipo de operación */}
            <select
              value={tipoFiltro}
              onChange={(e) => setTipoFiltro(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#C5A059] focus:border-[#C5A059] block p-2.5 outline-none cursor-pointer"
            >
              <option value="">Tipo de operación</option>
              <option value="Venta">Comprar</option>
              <option value="Alquiler">Alquilar</option>
            </select>

            {/* Filtro: Ambientes */}
            <select
              value={ambientesFiltro}
              onChange={(e) => setAmbientesFiltro(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#C5A059] focus:border-[#C5A059] block p-2.5 outline-none cursor-pointer"
            >
              <option value="">Cantidad de ambientes</option>
              {ambientesUnicos.map((a) => (
                <option key={a} value={a}>
                  {a} ambiente{a !== 1 ? "s" : ""}
                </option>
              ))}
            </select>

            {/* Filtro: Superficie */}
            <select
              value={superficieFiltro}
              onChange={(e) => setSuperficieFiltro(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#C5A059] focus:border-[#C5A059] block p-2.5 outline-none cursor-pointer"
            >
              <option value="">Superficie (m²)</option>
              {RANGOS_SUPERFICIE.map((r) => (
                <option key={r.label} value={r.label}>{r.label}</option>
              ))}
            </select>

            {/* Botón limpiar filtros */}
            {(tipoFiltro || ambientesFiltro || superficieFiltro) && (
              <button
                onClick={() => { setTipoFiltro(""); setAmbientesFiltro(""); setSuperficieFiltro(""); }}
                className="text-sm text-[#C5A059] font-semibold hover:underline flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Limpiar filtros
              </button>
            )}
          </div>
          <div className="text-gray-500 text-sm font-medium">
            Mostrando <span className="font-bold text-[#151E2D]">{propiedadesFiltradas.length}</span> de {PROPERTIES.length} propiedades
          </div>
        </div>
      </div>

      {/* GRILLA */}
      <section className="container mx-auto px-6 py-12">
        {propiedadesFiltradas.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-medium">No hay propiedades con esos filtros</p>
            <button
              onClick={() => { setTipoFiltro(""); setAmbientesFiltro(""); }}
              className="mt-4 text-[#C5A059] font-semibold hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedadesFiltradas.map((prop) => (
              <div key={prop.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 ${prop.type === "Venta" ? "bg-[#C5A059]" : "bg-[#151E2D]"} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {prop.type}
                  </div>
                  {/* Badge ambientes */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#151E2D] text-xs font-bold px-3 py-1 rounded-full">
                    {prop.ambientes} amb.
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2 text-[#151E2D]">{prop.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {prop.location}
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                    <span className="flex items-center gap-1">
                      <span className="font-medium text-[#151E2D]">{prop.ambientes}</span> Amb.
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium text-[#151E2D]">{prop.beds}</span> Hab.
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium text-[#151E2D]">{prop.baths}</span> Baños
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="font-medium text-[#151E2D]">{prop.area}</span> m²
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C5A059] font-bold text-2xl">{prop.price}</span>
                    <Link
                      href={`/propiedades/${prop.id}`}
                      className="text-[#151E2D] font-semibold hover:text-[#C5A059] transition-colors flex items-center gap-2"
                    >
                      Ver detalles <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

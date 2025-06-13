"use client"
import { useState } from "react"

const PortfolioGallery = () => {
  // Your actual PDF files from public/pdfs/
  const portfolioItems = [
    {
      id: 1,
      title: "Company Profile Design - Sample 1",
      category: "company-profile",
      pdfUrl: "/pdfs/1.pdf",
      description: "Professional company profile design showcasing modern layout and branding"
    },
    {
      id: 2,
      title: "Company Profile Design - Sample 2",
      category: "company-profile", 
      pdfUrl: "/pdfs/2.pdf",
      description: "Corporate identity and company profile with clean, professional aesthetics"
    },
    {
      id: 3,
      title: "Company Profile Design - Sample 3",
      category: "company-profile",
      pdfUrl: "/pdfs/3.pdf",
      description: "Creative company profile design with engaging visual elements"
    },
    {
      id: 4,
      title: "Company Profile Design - Sample 4",
      category: "company-profile",
      pdfUrl: "/pdfs/4.pdf",
      description: "Business profile design featuring comprehensive company information"
    },
    {
      id: 5,
      title: "Company Profile Design - Sample 5",
      category: "company-profile",
      pdfUrl: "/pdfs/5.pdf",
      description: "Elegant company profile design with professional presentation layout"
    }
  ]

  const handleViewPDF = (pdfUrl, title) => {
    window.open(pdfUrl, '_blank')
  }

  const handleDownload = (pdfUrl, title) => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title}.pdf`
    link.click()
  }

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A3C3C] mb-4">
            Our <span className="text-[#F4A261]">Design Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of professionally designed company profiles and marketing materials
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-[#2E8B8B] to-[#1A3C3C] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📄</div>
                    <div className="text-sm font-medium">PDF Document</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1A3C3C] mb-2 group-hover:text-[#2E8B8B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewPDF(item.pdfUrl, item.title)}
                    className="flex-1 bg-gradient-to-r from-[#2E8B8B] to-[#1A3C3C] text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                  >
                    👁️ View PDF
                  </button>
                  <button
                    onClick={() => handleDownload(item.pdfUrl, item.title)}
                    className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
                  >
                    ⬇️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1A3C3C] mb-4">
              Need a Custom Company Profile?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us create a professional and unique company profile that represents your brand perfectly.
            </p>
            <button className="bg-gradient-to-r from-[#2E8B8B] to-[#1A3C3C] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioGallery
import React from 'react';

const Offer = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="bg-[#1B3C73] text-white p-6 flex-shrink-0">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Wiadomości Polskie</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-gray-300 transition-colors">Strona główna</a>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow relative">
        <iframe 
          src="https://prif65.click/full/95011?stream_uuid=e519c74e-3f8f-416b-89e8-3ae35f13623c&trek=1&utm_source=sftmn"
          className="w-full h-full absolute inset-0 border-0"
          title="External content"
          sandbox="allow-same-origin allow-scripts"
        />
      </main>
    </div>
  );
};

export default Offer;

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1B3C73] text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Wiadomości Polskie</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-[#DC143C] transition-colors">Strona główna</a>
            <a href="#about" className="hover:text-[#DC143C] transition-colors">O nas</a>
            <a href="#contact" className="hover:text-[#DC143C] transition-colors">Kontakt</a>
            <a href="#politics" className="hover:text-[#DC143C] transition-colors">Polityka</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Featured News Article */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c"
                alt="Seniors reacting to news"
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                  <span>{new Date().toLocaleDateString('pl-PL', { day: '2-digit', month: 'long' })}</span>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-fire text-red-500"></i>
                    <span>74754</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-comment"></i>
                    <span>77</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  To już nastąpiło! ZUS zawiesił wypłaty emerytur seniorów
                </h2>
                
                <p className="text-gray-600 mb-6">
                  W środa ZUS ma zaktualizować dopuszczalne limity, od których zależy czy dorabiający emeryci dostaną pełną emeryturę, czy też ta zostanie pomniejszona. W przypadku przekroczenia limitów możliwe jest nawet całkowite zawieszenie wypłat świadczeń z ZUS.
                </p>
                
                <Link 
                  to="/offer"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Czytaj więcej
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B3C73]">Najnowsze Wiadomości</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Article 1 */}
            <article className="border rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Technologia" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Nowe Inwestycje w Technologię</h3>
                <p className="text-gray-600 mb-4">Polski rząd ogłasza nowy program inwestycyjny w sektorze technologicznym...</p>
                <span className="text-sm text-gray-500">2024-02-20</span>
              </div>
            </article>

            {/* News Article 2 */}
            <article className="border rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" alt="Gospodarka" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Rozwój Gospodarczy</h3>
                <p className="text-gray-600 mb-4">Polska gospodarka notuje znaczący wzrost w pierwszym kwartale 2024...</p>
                <span className="text-sm text-gray-500">2024-02-19</span>
              </div>
            </article>

            {/* News Article 3 */}
            <article className="border rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Edukacja" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Reforma Edukacji</h3>
                <p className="text-gray-600 mb-4">Ministerstwo Edukacji przedstawia nowy plan reform szkolnictwa...</p>
                <span className="text-sm text-gray-500">2024-02-18</span>
              </div>
            </article>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B3C73]">O nas</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700">
              Wiadomości Polskie to niezależny portal informacyjny, dostarczający rzetelnych i aktualnych informacji z kraju i ze świata. 
              Nasz zespół doświadczonych dziennikarzy pracuje 24/7, aby zapewnić Państwu najświeższe i najważniejsze wiadomości.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B3C73]">Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Dane kontaktowe</h3>
              <p className="mb-2">Email: redakcja@wiadomoscipolskie.pl</p>
              <p className="mb-2">Tel: +48 22 123 45 67</p>
              <p>Adres: ul. Marszałkowska 1, 00-001 Warszawa</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Godziny pracy</h3>
              <p className="mb-2">Poniedziałek - Piątek: 8:00 - 20:00</p>
              <p>Sobota - Niedziela: 9:00 - 18:00</p>
            </div>
          </div>
        </section>

        {/* Politics Section */}
        <section id="politics" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B3C73]">Polityka</h2>
          <div className="grid grid-cols-1 gap-6">
            <article className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2">Nowe Ustawy w Sejmie</h3>
              <p className="text-gray-600 mb-4">
                Sejm przyjął nowe ustawy dotyczące reform gospodarczych. Opozycja wyraża swoje zastrzeżenia...
              </p>
              <span className="text-sm text-gray-500">2024-02-20</span>
            </article>
            <article className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2">Debata nad Budżetem</h3>
              <p className="text-gray-600 mb-4">
                W parlamencie trwa gorąca debata nad projektem budżetu na rok 2024...
              </p>
              <span className="text-sm text-gray-500">2024-02-19</span>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B3C73] text-white p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-4">Wiadomości Polskie</h4>
              <p className="text-sm">© 2024 Wszystkie prawa zastrzeżone</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Szybkie linki</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#DC143C] transition-colors">Strona główna</a></li>
                <li><a href="#about" className="hover:text-[#DC143C] transition-colors">O nas</a></li>
                <li><a href="#contact" className="hover:text-[#DC143C] transition-colors">Kontakt</a></li>
                <li><a href="#politics" className="hover:text-[#DC143C] transition-colors">Polityka</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social Media</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#DC143C] transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-[#DC143C] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#DC143C] transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
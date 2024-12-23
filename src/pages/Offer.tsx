const Offer = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#1B3C73] text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Wiadomości Polskie</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-[#DC143C] transition-colors">Strona główna</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            To już nastąpiło! ZUS zawiesił wypłaty emerytur seniorów
          </h1>
          
          <img
            src="https://images.unsplash.com/photo-1532375810709-75b1da00537c"
            alt="Seniors reacting to news"
            className="w-full h-[400px] object-cover mb-6 rounded-lg"
          />
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              W środa ZUS ma zaktualizować dopuszczalne limity, od których zależy czy dorabiający emeryci dostaną pełną emeryturę, czy też ta zostanie pomniejszona. W przypadku przekroczenia limitów możliwe jest nawet całkowite zawieszenie wypłat świadczeń z ZUS.
            </p>
            
            <p className="text-lg mb-4">
              Zgodnie z przepisami emeryci, którzy nie osiągnęli powszechnego wieku emerytalnego, oraz renciści mogą dorabiać do świadczenia, ale tylko do określonych limitów. Po ich przekroczeniu świadczenie jest zmniejszane lub zawieszane.
            </p>
            
            <p className="text-lg mb-4">
              Limity zmieniają się co trzy miesiące i są uzależnione od przeciętnego wynagrodzenia krajowego. Nowe progi będą obowiązywać od marca do maja 2024 roku.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Offer;
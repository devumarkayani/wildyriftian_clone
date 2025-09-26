const ChampionCard = ({ champion }) => {
  return (
    <div className="bg-wildrift-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={champion.image} 
          alt={champion.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-wildrift-gold text-wildrift-dark px-2 py-1 rounded text-sm font-bold">
          {champion.role}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{champion.name}</h3>
        <p className="text-wildrift-gold text-sm mb-3">{champion.title}</p>
        <p className="text-gray-400 text-sm mb-4">{champion.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Difficulty: {champion.difficulty}</span>
          <button className="bg-wildrift-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
            View Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
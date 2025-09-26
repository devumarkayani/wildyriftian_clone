import { useState } from 'react';
import { champions, roles } from '../data/champions';
import ChampionCard from './ChampionCard';

const ChampionsSection = () => {
  const [selectedRole, setSelectedRole] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChampions = champions.filter(champion => {
    const matchesRole = selectedRole === 'All' || champion.role === selectedRole;
    const matchesSearch = champion.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <section id="champions" className="py-20 bg-gradient-to-b from-wildrift-dark to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Champions</h2>
          <p className="text-gray-400 text-lg">Explore all champions and find your perfect match</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedRole === role
                    ? 'bg-wildrift-gold text-wildrift-dark font-bold'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search champions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-wildrift-gold"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Champions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredChampions.map(champion => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </div>

        {filteredChampions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No champions found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChampionsSection;
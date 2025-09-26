import { news } from '../data/news';
import NewsCard from './NewsCard';

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
          <p className="text-gray-400 text-lg">Stay updated with the latest Wild Rift news and updates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map(item => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-wildrift-gold text-wildrift-dark px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
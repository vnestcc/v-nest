// components/StartupGrid.jsx
import HexagonCard from './HexagonCard';

const StartupGrid = ({ startups }) => {
  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {startups.map((startup) => (
          <div key={startup.id} className="flex justify-center">
            <div className="w-full max-w-[150px]">
              <HexagonCard startup={startup} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupGrid;


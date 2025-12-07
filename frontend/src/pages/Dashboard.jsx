import { useAuth } from '../context/AuthContext';
import AuthNavbar from '../components/AuthNavbar';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <AuthNavbar />

      {/* Main Content */}
      <main className="dashboard__main" role="main" style={{ marginTop: '80px' }}>
        <div className="dashboard__container">
          {/* Welcome Section */}
          <div className="dashboard__welcome">
            <h2 className="dashboard__welcome-title">
              Welcome, {user?.firstName || 'User'}!
            </h2>
            <p className="dashboard__welcome-subtitle">
              Clean Energy Innovation Dashboard
            </p>
          </div>

          {/* Main Content Card */}
          <div className="info-section">
            <div className="info-card info-card--full-width">
              <div className="info-card__header">
                <h3 className="info-card__title">Global Renewable Energy Capacity Surges to Record Highs in 2024</h3>
              </div>
              <div className="info-card__body">
                <div className="content-section">
                  <p className="content-paragraph">
                    The International Renewable Energy Agency (IRENA) has reported a remarkable milestone in the global energy transition, 
                    with renewable energy capacity additions reaching unprecedented levels in 2024. According to their latest renewable 
                    capacity statistics, the world added 473 gigawatts (GW) of renewable energy capacity in 2023, with projections for 2024 
                    exceeding 550 GW. Solar photovoltaic (PV) systems continue to dominate new installations, accounting for nearly 73% of 
                    all renewable capacity additions, driven by declining technology costs and supportive policy frameworks across major 
                    economies. China, the United States, and the European Union collectively represent over 70% of global renewable capacity 
                    growth. Offshore wind energy has emerged as a particularly promising sector, with installed capacity growing by 45% 
                    year-over-year, especially in coastal regions of Asia and Northern Europe. The report highlights that floating offshore 
                    wind technology is opening new frontiers, enabling installations in deeper waters previously considered unsuitable. 
                    Battery energy storage systems have become critical enablers of renewable integration, with global storage capacity 
                    reaching 85 GWh by end of 2023 and expected to double by 2025. This surge in renewable capacity is directly contributing 
                    to a 12% reduction in global carbon emissions from the power sector, demonstrating the tangible impact of the energy 
                    transition. Investment in renewable energy infrastructure reached $495 billion in 2023, marking a 17% increase from the 
                    previous year. The data underscores an accelerating momentum toward achieving global climate targets, with renewables 
                    now representing 30% of total global electricity generation capacity, up from 27% in 2022.
                  </p>
                  <div className="content-reference">
                    <strong>Article Source:</strong>{' '}
                    <a 
                      href="https://www.irena.org/Publications/2024/Mar/Renewable-capacity-statistics-2024" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="reference-link"
                    >
                      IRENA - Renewable Capacity Statistics 2024 (March 2024)
                    </a>
                  </div>
                  <p className="content-note" style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                    The Summary and Reports pages contain data visualizations based on this article, showing renewable energy capacity 
                    growth trends and investment distribution across different clean energy technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

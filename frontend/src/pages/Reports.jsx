import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import AuthNavbar from '../components/AuthNavbar';
import Icon from '../components/Icon';
import { useAuth } from '../context/AuthContext';
import apiService from '../services/api';
import '../styles/pages.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  const { token } = useAuth();
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiService.data.getReports(token);
        setChartData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching reports data:', err);
        setError(err.message || 'Failed to load chart data');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Global Clean Energy Investment by Technology (2024)',
        font: {
          size: 18,
          weight: 'bold',
          family: "'Inter', sans-serif"
        },
        padding: {
          top: 10,
          bottom: 30
        },
        color: '#065f46'
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 13
        },
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += '$' + context.parsed.y + 'B USD';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#6b7280',
          callback: function(value) {
            return '$' + value + 'B';
          }
        },
        title: {
          display: true,
          text: 'Investment (Billion USD)',
          font: {
            size: 13,
            weight: '600'
          },
          color: '#065f46'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 11
          },
          color: '#6b7280',
          maxRotation: 45,
          minRotation: 45
        }
      }
    }
  };

  return (
    <>
      <AuthNavbar />
      <div className="page-container" style={{ marginTop: '80px' }}>
        <header className="page-header">
          <h1 className="page-header__title">
            <Icon name="report" size={32} className="page-header__icon" />
            Clean Energy Reports
          </h1>
          <p className="page-header__subtitle">
            Investment analysis across renewable energy technology sectors
          </p>
        </header>

        {loading && (
          <div className="loading-state" role="status" aria-live="polite">
            <div className="loading-state__spinner" aria-hidden="true"></div>
            <p className="loading-state__text">Loading chart data...</p>
          </div>
        )}

        {error && (
          <div className="error-state" role="alert">
            <div className="error-state__icon" aria-hidden="true">
              <Icon name="alert" size={48} />
            </div>
            <h2 className="error-state__title">Error Loading Data</h2>
            <p className="error-state__message">{error}</p>
          </div>
        )}

        {!loading && !error && chartData && (
          <section className="chart-section" aria-labelledby="report-chart-title">
            <h2 id="report-chart-title" className="chart-section__title">
              <Icon name="dollar" size={28} className="section-icon" />
              Technology Investment Distribution
            </h2>
            
            <div className="chart-container" role="img" aria-label="Bar chart showing investment in different clean energy technologies">
              <Bar data={chartData} options={options} />
            </div>

            <div className="chart-description">
              <h3 className="chart-description__title">
                <Icon name="info" size={24} className="section-icon" />
                Investment Insights
              </h3>
              <p className="chart-description__text">
                The investment landscape in clean energy technologies reveals strategic priorities in the global energy transition. 
                Solar PV leads with $380 billion in annual investment, reflecting its proven scalability and decreasing costs. 
                Wind energy follows with $295 billion, split between onshore and offshore projects. Battery storage has emerged as 
                a critical enabler at $180 billion, addressing intermittency challenges. Green hydrogen, despite being in earlier 
                stages of deployment, has attracted $125 billion in investment as countries pursue decarbonization of heavy industry 
                and long-distance transport. Smart grid technologies receive $90 billion to modernize infrastructure and enable 
                demand response. Traditional renewables like hydropower ($85 billion), bioenergy ($45 billion), and geothermal 
                ($28 billion) continue to receive steady investment. This distribution reflects a balanced portfolio approach to 
                achieving net-zero targets while addressing different energy sector needs and regional resource availability.
              </p>
              <div className="chart-description__source">
                <Icon name="link" size={18} className="source-icon" />
                <span>Investment data sourced from: </span>
                <a 
                  href="https://www.iea.org/reports/world-energy-investment-2024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="chart-description__link"
                  aria-label="IEA World Energy Investment Report (opens in new tab)"
                >
                  IEA World Energy Investment 2024
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Reports;

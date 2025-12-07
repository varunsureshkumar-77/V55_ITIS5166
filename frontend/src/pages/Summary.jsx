import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Summary = () => {
  const { token } = useAuth();
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiService.data.getSummary(token);
        setChartData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching summary data:', err);
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
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: "'Inter', sans-serif"
          },
          padding: 15,
          usePointStyle: true
        }
      },
      title: {
        display: true,
        text: 'Global Renewable Energy Capacity Growth (2018-2024)',
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
              label += context.parsed.y + (context.datasetIndex === 2 ? ' GWh' : ' GW');
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
          color: '#6b7280'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#6b7280'
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    }
  };

  return (
    <>
      <AuthNavbar />
      <div className="page-container" style={{ marginTop: '80px' }}>
        <header className="page-header">
          <h1 className="page-header__title">
            <Icon name="chart" size={32} className="page-header__icon" />
            Clean Energy Summary
          </h1>
          <p className="page-header__subtitle">
            Tracking the exponential growth of renewable energy technologies worldwide
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
          <section className="chart-section" aria-labelledby="chart-title">
            <h2 id="chart-title" className="chart-section__title">
              <Icon name="trendUp" size={28} className="section-icon" />
              Renewable Energy Capacity Trends
            </h2>
            
            <div className="chart-container" role="img" aria-label="Line chart showing renewable energy capacity growth from 2018 to 2024">
              <Line data={chartData} options={options} />
            </div>

            <div className="chart-description">
              <h3 className="chart-description__title">
                <Icon name="info" size={24} className="section-icon" />
                Analysis & Insights
              </h3>
              <p className="chart-description__text">
                The chart above illustrates the remarkable growth trajectory of three key renewable energy sectors from 2018 to 2024. 
                Solar photovoltaic capacity has experienced the most dramatic expansion, more than tripling from 480 GW to 1,590 GW, 
                driven by declining costs and technological improvements in panel efficiency. Wind energy capacity has also shown 
                substantial growth, increasing from 560 GW to 1,240 GW, with offshore wind farms contributing significantly to this 
                expansion. Perhaps most striking is the exponential growth in battery storage capacity, which has surged from just 
                10 GWh in 2018 to 280 GWh in 2024, enabling better grid stability and renewable energy integration. This growth 
                reflects unprecedented global investment in clean energy infrastructure and represents a fundamental shift in how 
                the world generates and stores electricity.
              </p>
              <div className="chart-description__source">
                <Icon name="link" size={18} className="source-icon" />
                <span>Data based on analysis from: </span>
                <a 
                  href="https://www.irena.org/Data/View-data-by-topic/Capacity-and-Generation/Statistics-Time-Series" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="chart-description__link"
                  aria-label="IRENA Renewable Capacity Statistics (opens in new tab)"
                >
                  IRENA Renewable Capacity Statistics
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Summary;

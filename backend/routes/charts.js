import express from 'express';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/summary', authenticateToken, (req, res) => {
  try {
    // Hardcoded data for renewable energy capacity by source (2024)
    const data = {
      energySources: [
        { source: 'Solar PV', capacity: 1420 },
        { source: 'Wind', capacity: 1020 },
        { source: 'Hydroelectric', capacity: 1230 },
        { source: 'Bioenergy', capacity: 145 },
        { source: 'Geothermal', capacity: 16 }
      ],
      year: 2024,
      unit: 'Gigawatts (GW)'
    };

    res.json(data);
  } catch (error) {
    console.error('Error fetching summary data:', error);
    res.status(500).json({ message: 'Server error fetching summary data' });
  }
});

// Get Reports Chart Data
router.get('/reports', authenticateToken, (req, res) => {
  try {
    // Hardcoded data for renewable energy growth trends (2019-2024)
    const data = {
      yearlyGrowth: [
        { year: 2019, solar: 580, wind: 622, hydro: 1150 },
        { year: 2020, solar: 710, wind: 733, hydro: 1170 },
        { year: 2021, solar: 850, wind: 837, hydro: 1190 },
        { year: 2022, solar: 1050, wind: 906, hydro: 1205 },
        { year: 2023, solar: 1230, wind: 970, hydro: 1220 },
        { year: 2024, solar: 1420, wind: 1020, hydro: 1230 }
      ],
      unit: 'Gigawatts (GW)',
      sources: ['solar', 'wind', 'hydro']
    };

    res.json(data);
  } catch (error) {
    console.error('Error fetching reports data:', error);
    res.status(500).json({ message: 'Server error fetching reports data' });
  }
});

export default router;

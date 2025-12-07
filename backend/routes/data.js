import express from 'express';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * @swagger
 * /api/data/summary:
 *   get:
 *     summary: Get clean energy capacity trends (Summary page chart data)
 *     tags: [Data]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary chart data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 labels:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
 *                 datasets:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       label:
 *                         type: string
 *                       data:
 *                         type: array
 *                         items:
 *                           type: number
 *                       borderColor:
 *                         type: string
 *                       backgroundColor:
 *                         type: string
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
// GET /api/data/summary - Chart data for Summary page
router.get('/summary', authenticateToken, (req, res) => {
  try {
    // Simulated data for clean energy innovations over the years
    const summaryData = {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [
        {
          label: 'Solar Capacity (GW)',
          data: [480, 580, 710, 850, 1050, 1300, 1590],
          borderColor: 'rgb(234, 179, 8)',
          backgroundColor: 'rgba(234, 179, 8, 0.2)',
          tension: 0.4
        },
        {
          label: 'Wind Capacity (GW)',
          data: [560, 620, 705, 825, 965, 1090, 1240],
          borderColor: 'rgb(14, 165, 233)',
          backgroundColor: 'rgba(14, 165, 233, 0.2)',
          tension: 0.4
        },
        {
          label: 'Battery Storage (GWh)',
          data: [10, 15, 25, 45, 85, 155, 280],
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.2)',
          tension: 0.4
        }
      ]
    };

    res.json(summaryData);
  } catch (error) {
    console.error('Error fetching summary data:', error);
    res.status(500).json({ message: 'Error fetching summary data' });
  }
});

/**
 * @swagger
 * /api/data/reports:
 *   get:
 *     summary: Get clean energy investment by region (Reports page chart data)
 *     tags: [Data]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Reports chart data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 labels:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["Solar", "Wind", "Hydro", "Battery Storage", "Hydrogen", "Geothermal"]
 *                 datasets:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
// GET /api/data/reports - Chart data for Reports page
router.get('/reports', authenticateToken, (req, res) => {
  try {
    // Simulated data for clean energy investment by region
    const reportsData = {
      labels: [
        'Solar PV',
        'Wind Energy',
        'Hydropower',
        'Bioenergy',
        'Geothermal',
        'Green Hydrogen',
        'Battery Storage',
        'Smart Grid'
      ],
      datasets: [
        {
          label: 'Investment (Billion USD)',
          data: [380, 295, 85, 45, 28, 125, 180, 90],
          backgroundColor: [
            'rgba(234, 179, 8, 0.8)',   // Solar - Yellow
            'rgba(14, 165, 233, 0.8)',  // Wind - Blue
            'rgba(6, 182, 212, 0.8)',   // Hydro - Cyan
            'rgba(34, 197, 94, 0.8)',   // Bio - Green
            'rgba(239, 68, 68, 0.8)',   // Geo - Red
            'rgba(168, 85, 247, 0.8)',  // H2 - Purple
            'rgba(251, 146, 60, 0.8)',  // Battery - Orange
            'rgba(20, 184, 166, 0.8)'   // Grid - Teal
          ],
          borderColor: [
            'rgb(234, 179, 8)',
            'rgb(14, 165, 233)',
            'rgb(6, 182, 212)',
            'rgb(34, 197, 94)',
            'rgb(239, 68, 68)',
            'rgb(168, 85, 247)',
            'rgb(251, 146, 60)',
            'rgb(20, 184, 166)'
          ],
          borderWidth: 2
        }
      ]
    };

    res.json(reportsData);
  } catch (error) {
    console.error('Error fetching reports data:', error);
    res.status(500).json({ message: 'Error fetching reports data' });
  }
});

export default router;

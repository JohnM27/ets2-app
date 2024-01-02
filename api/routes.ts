import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

// Route test
router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default router;

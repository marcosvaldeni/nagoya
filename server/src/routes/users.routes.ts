import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', (req, res) => {
  const { name, email } = req.body;

  console.log(name, email);

  return res.json({ ok: true });
});

export default usersRouter;
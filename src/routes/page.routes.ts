import { Router, Request, Response } from "express";

const pageRouter = Router();

//HOME
pageRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send('Welcome to my server')
  })
  
  export default pageRouter
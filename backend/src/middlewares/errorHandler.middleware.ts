import express from 'express';
import { logger } from '../services/logger.service'

export const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    // if (err instanceof BaseError) {
    //     return res.status(err.statusCode).json(err)
    // }
    console.log(err);
    // default to 500 server error
    logger.error('[ERROR-HANDLER] ', err)
    return res.status(500).json({ message: err.message })
}



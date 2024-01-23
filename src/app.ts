import express, { Application } from 'express'

import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)

// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Working well!')
//     throw new ApiError(400, "Error Happen---")
//     throw new Error('Error Happen---')
//     next("error from next function")
// })

// global error handler
app.use(globalErrorHandler)

export default app

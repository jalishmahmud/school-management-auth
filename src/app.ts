import express, { Application } from 'express'

import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
import { SemesterRoutes } from './app/modules/academicSemester/academicSemester.route'

const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)
app.use('/api/v1/academic-semesters/', SemesterRoutes)

// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     throw new Error("Testing error logger")
// })

// global error handler
app.use(globalErrorHandler)

export default app

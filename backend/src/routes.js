import { Router } from 'express'
import QuestionController from './modules/question/QuestionController'

const Routes = Router()

Routes.get('/', QuestionController.home)
Routes.get('/question', QuestionController.index)
Routes.get('/question/:id', QuestionController.buscarId)
Routes.post('/question', QuestionController.store)

export default Routes

import AppError from "../../shared/AppError"
import QuestionSchema from "./QuestionSchema"

function QuestionController() {
  return {

    async home(req, res){
      await res.send("Seja bem vindo a minha API")
    },

    async index(req, res) {
      const question = req.query
       const filters = {}

       if (question){
         filters.question = question
       }

      const questions = await QuestionSchema.find(question).limit(10)
      return res.status(200).send(questions)
    },

    async store(req, res) {
      const { question, answers } = req.body

      const isAnswersValid = answers.options.includes(answers.correct)

      if (!isAnswersValid) {
        throw new AppError('Correct Answer must be in options Array')
      }

      const questionSaved = await QuestionSchema.create({ question, answers })
      return res.status(201).json({ question: questionSaved })
    },
    async buscarId(req, res){
      // try{
      //   const {id} = req.params
      //   const QuestionId = await QuestionSchema.findById(id)
      //   return res.status(200).send(QuestionId)
      // } catch(error){
      //   return res.status(404).send({ message: 'Pergunta não encontrada' })
      // }
      const {id} = req.params
      // const findOne = QuestionSchema.findOne(questionId)
      const questionOne = await QuestionSchema.findById(id)
      return res.status(200).send(questionOne)
    }
  }
}

export default QuestionController()

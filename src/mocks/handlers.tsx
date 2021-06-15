/* eslint-disable import/prefer-default-export */

import { rest } from 'msw'

export const handlers = [
  rest.get(`${process.env.WALLORA_BACKEND_SUBMIT_FEEDBACK}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        message: 'Thank you for your feedback from msw.',
        success: true,
      })
    )
  ),
  rest.get(`${process.env.WALLORA_BACKEND_TOTAL_PLANNED_EXPENSES_MONTHWISE}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        expenses: [
          {
            month: 202107,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 42000,
          },
          {
            month: 202108,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 42000,
          },
          {
            month: 202109,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 42000,
          },
          {
            month: 202110,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 42000,
          },
          {
            month: 202111,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 42000,
          },
          {
            month: 202112,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 2000,
          },
          {
            month: 202201,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 2000,
          },
          {
            month: 202202,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 2000,
          },
          {
            month: 202203,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 2000,
          },
          {
            month: 202204,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 2000,
          },
          {
            month: 202205,
            totalPlannedIncome: 0,
            totalPlannedExpenses: 0,
          },
          {
            month: 202206,
            totalPlannedIncome: 0,
            totalPlannedExpenses: 0,
          },
        ],
      })
    )
  ),
  rest.get(`${process.env.WALLORA_BACKEND_TOTAL_PLANNED_AMOUNT_WORKITEMWISE}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            name: 'House rent',
            amount: 2400,
          },
          {
            name: 'Taxes',
            amount: 1398,
          },
          {
            name: 'Grocery',
            amount: 9800,
          },
          {
            name: 'Eat out',
            amount: 3908,
          },
          {
            name: 'Bills and EMIs',
            amount: 4800,
          },
          {
            name: 'Fitness',
            amount: 3800,
          },
          {
            name: 'Entertainment',
            amount: 4300,
          },
          {
            name: 'Entertainment',
            amount: 0,
          },
          {
            name: 'Entertainment',
            amount: 0,
          },
          {
            name: 'Entertainment',
            amount: 0,
          },
          {
            name: 'Entertainment',
            amount: 0,
          },
        ],
      })
    )
  ),
]

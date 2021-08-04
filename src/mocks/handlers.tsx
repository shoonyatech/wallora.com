/* eslint-disable import/prefer-default-export */

import { graphql, rest } from 'msw'

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
  rest.get(`${process.env.WALLORA_BACKEND_WORKITEM_CURRENTMONTH}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        month: 202107,
        totalPlannedIncome: 150000,
        totalPlannedExpenses: 42000,
      })
    )
  ),
  rest.get(`${process.env.WALLORA_BACKEND_WORKITEM_PLANNED_ITEMS}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        expenses: [
          {
            month: 202107,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 42000,
          },
        ],
      })
    )
  ),
  rest.get(`${process.env.WALLORA_BACKEND_WORKITEM_ACTUAL_ITEMS}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        expenses: [
          {
            month: 202107,
            totalPlannedIncome: 150000,
            totalPlannedExpenses: 42000,
          },
        ],
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
  graphql.query('User', (req, res, ctx) =>
    res(
      ctx.data({
        user: {
          userSettings: {
            currency: 'Mock Currency',
            accountId: 'Mock Id',
          },
        },
      })
    )
  ),
  graphql.query('Currencies', (req, res, ctx) =>
    res(
      ctx.data({
        currency: [
          {
            _id: '57a9d667719640648ed9e724',
            order: 0,
            symbol: '$',
            code: 'USD',
            name: 'US Dollar',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e725',
            order: 1,
            symbol: '€',
            code: 'EUR',
            name: 'Euro',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e726',
            order: 2,
            symbol: '&#x20b9;',
            code: 'INR',
            name: 'Indian Rupee',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e727',
            order: 3,
            symbol: '$',
            code: 'AUD',
            name: 'Australian dollar',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e728',
            order: 4,
            symbol: '&#xa3;',
            code: 'GBP',
            name: 'Pound',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e729',
            order: 5,
            symbol: '$',
            code: 'SGD',
            name: 'Singapore dollar',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e72a',
            order: 6,
            symbol: '¥',
            code: 'JPY',
            name: 'Japanese yen',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e72b',
            order: 7,
            symbol: 'Vt',
            code: 'VUV',
            name: 'Vanuatu vatu',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e72c',
            order: 8,
            symbol: '₫',
            code: 'VND',
            name: 'Vietnamese đồng',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e72d',
            order: 9,
            symbol: '₪',
            code: 'ILS',
            name: 'Israeli new shekel',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e72e',
            order: 10,
            symbol: '₭',
            code: 'LAK',
            name: 'Lao kip',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e72f',
            order: 11,
            symbol: 'P',
            code: 'MOP',
            name: 'Macanese pataca',
            __v: 0,
          },
          {
            _id: '57a9d667719640648ed9e730',
            order: 12,
            symbol: 'ر.ع.',
            code: 'OMR',
            name: 'Omani rial',
            __v: 0,
          },
        ],
      })
    )
  ),
]

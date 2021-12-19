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
  graphql.query('Finance', (req, res, ctx) => {
    // eslint-disable-next-line no-unused-vars
    const { startDate, endDate } = req.variables
    return res(
      ctx.data({
        finance: {
          currentMonth: '2021-10',
          incomeExpenseCategories: [
            {
              id: 1,
              order: 1,
              name: 'Income',
              incomeOrExpense: 'income',
              currency: 'INR',
              plannedTotal: 100000,
              actualTotal: 90000,
            },
            {
              id: 2,
              order: 2,
              name: 'Taxes',
              incomeOrExpense: 'expense',
              currency: 'INR',
              plannedTotal: 20000,
              actualTotal: 19000,
              percentageOfTotalExpense: 17,
            },
            {
              id: 3,
              order: 3,
              name: 'Grocery',
              incomeOrExpense: 'expense',
              currency: 'INR',
              plannedTotal: 20000,
              actualTotal: 19000,
              percentageOfTotalExpense: 4,
            },
          ],
          actuals: {
            dates: [
              {
                date: '2021-10-05',
                totalSpent: 19000,
                workItems: [
                  {
                    id: 12541,
                    incomeOrExpense: 'income',
                    category: 'Income',
                    lineItems: [
                      {
                        description: 'October Salary',
                        currency: 'INR',
                        amount: 70000,
                        tags: ['Salary'],
                      },
                    ],
                  },
                  {
                    id: 12542,
                    incomeOrExpense: 'expense',
                    category: 'Taxes',
                    lineItems: [
                      {
                        description: '',
                        currency: 'INR',
                        amount: 19000,
                        tags: ['Income Tax'],
                      },
                    ],
                  },
                ],
              },
              {
                date: '2021-10-06',
                totalSpent: 8000,
                workItems: [
                  {
                    id: 18542,
                    incomeOrExpense: 'expense',
                    category: 'Bills and EMI',
                    lineItems: [
                      {
                        description: 'Home Loan',
                        currency: 'INR',
                        amount: 8000,
                        tags: ['Loan'],
                      },
                    ],
                  },
                ],
              },
              {
                date: '2021-10-07',
                totalSpent: 10,
                workItems: [],
              },
            ],
          },
          plan: {
            months: [
              {
                month: '2021-10',
                workItems: [
                  {
                    id: 18542,
                    incomeOrExpense: 'income',
                    category: 'Income',
                    lineItems: [
                      {
                        description: '',
                        currency: 'INR',
                        amount: 120000,
                        tags: ['Salary'],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      })
    )
  }),
  graphql.query('Headings', (req, res, ctx) =>
    res(
      ctx.data({
        dates: [
          {
            date: '01 Oct 2021',
            value: 12000,
          },
          {
            date: '02 Oct 2021',
            value: 14320,
          },
          {
            date: '03 Oct 2021',
            value: 28542,
          },
          {
            date: '04 Oct 2021',
            value: 3000,
          },
          {
            date: '05 Oct 2021',
            value: 5244,
          },
        ],
      })
    )
  ),
]

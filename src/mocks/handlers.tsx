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
]

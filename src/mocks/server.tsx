/* eslint-disable import/prefer-default-export */

import { setupServer } from 'msw/node'

import { handlers } from './handlers'

export const server = setupServer(...handlers)

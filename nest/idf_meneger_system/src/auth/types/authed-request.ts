import type { Request } from 'express';
import type { JwtUser } from './jwt-payload';

export type AuthedRequest = Request & { user: JwtUser };

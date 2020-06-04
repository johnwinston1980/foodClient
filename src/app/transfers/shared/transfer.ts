import { Contact } from '../../contacts/shared/contact'

export interface Transfer {
    uid?: string,
    contact: Contact,
    amount?: number,
    status?: string
}
export interface ITicketUtil {
  findFields(customFieldValues: Movidesk.CustomFieldValue[]): Ticket.Return;
}

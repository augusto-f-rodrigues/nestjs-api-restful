export interface IMovidesk{
  getTicket(id: string): Promise<Movidesk.TicketResponse>
}
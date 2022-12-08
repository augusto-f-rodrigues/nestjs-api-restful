/**
 * Interface para os funções úteis referentes aos tickets
 */
export interface ITicketUtil {
  /**
   * Método para filtrar o ticket
   * @param customFieldValues - Campos customizáveis que são preenchidos no ticket
   */
  findFields(customFieldValues: Movidesk.CustomFieldValue[]): Ticket.Return;
}

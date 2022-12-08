/**
 * **Interface para o Movidesk**
 */
export interface IMovidesk {
  /**
   * **Método de consumo de dados**
   *
   * Obter dados do ticket através do "id"
   *
   * @param id - Identificador do ticket
   *
   * @returns O retorno é o resultado da operação, devido ao tamanho da resposta conferir na documentação da API através do link: https://atendimento.movidesk.com/kb/article/256/movidesk-ticket-api ou conferindo o type "TicketResponse".
   *
   */
  getTicket(id: string): Promise<Movidesk.TicketResponse>;

  /**
   * Função que atualiza/insere os dados no ticket do movidesk
   *
   * @param customFieldValues Campos que serão inseridos no movidesk
   *
   * @param id Identificador do ticket
   *
   * @returns Resposta de sucesso caso consigo dar update no movidesk
   */
  updateTicket(customFieldValues: Movidesk.CustomFieldValue[], id: string);
}

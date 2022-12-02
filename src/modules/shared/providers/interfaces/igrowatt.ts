export interface IGrowatt {
  /** 
    * 
    * **Método de Autenticação**
    *  
    * Obter porta de token
    * 
    * @example  
    * {
    *  "result":0, // 0 indica obter resultado com sucesso
    *   "msg":"The token will expire after 15 minutes!",
    *   "obj":"fjj39oa47ir3669vh8m54rpk49lf55ll"
    * }
    * @returns Está função tem como retorno no parâmetro
    * de Obj o token de autenticação.
    */

  authenticate(): Promise<Growatt.AuthResponse>;

  /**
   * **Método de Atualização**
   *
   * Receba a porta de recebimento de informações de interface de câmbio/RMA brasileira.
   *
   * @param newSerialNumber - Novo número de série
   * @param oldSerialNumber - Antigo número de série
   * @param time - Data de substituição
   *
   * @returns Está função temo como retorno o resultado da operação.
   * @example 
   * {
   * "result":0,
   * "msg":"换机成功!"
   * }
   * @remark Obtenha o código de falha de retorno na descrição da falha na página inicial
   */
  updateOSS(
    newSerialNumber: string,
    oldSerialNumber: string,
    time: string,
  ): Promise<Growatt.UpdateOSSResponse>;
}

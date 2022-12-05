declare namespace Growatt {
  interface AuthResponse {
    /**
     * Código de resultado da operação
     */
    result: number;
    /**
     *  Mensagem de resposta da operação
     */
    msg: string;

    /**
     * Token de Autenticação
     */
    obj: string;
  }

  interface UpdateOSSResponse {
    /**
     *  Mensagem de resposta da operação
     */

    result: number;

    /**
     *  Mensagem de resposta da operação
     */
    msg: string;
  }
}

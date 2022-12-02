declare namespace Growatt {
  interface AuthResponse {
    /**
     * Código de resultado da operação
     */
    result: number;
    /**
     *  Messagem de resposta da operação
     */
    msg: string;

    /**
     * Token de Autenticação
     */
    obj: string;
  }

  interface UpdateOSSResponse {
    /**
     *  Messagem de resposta da operação
     */

    result: number;

    /**
     *  Messagem de resposta da operação
     */
    msg: string;
  }
}

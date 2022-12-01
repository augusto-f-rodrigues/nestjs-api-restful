export interface IGrowatt {

    /** 
    * 
    * Método de Autenticação
    *@example  {
        "result":0,
        "msg":"The token will expire after 15 minutes!",
        "obj":"fjj39oa47ir3669vh8m54rpk49lf55ll"
    }
    * @returns Está função tem como retorno no parâmetro
    * de Obj o token de autenticação.
    */
   
    authenticate(): Promise<Growatt.AuthResponse>

    /**
     * Método de Atualização
     * @example {
     * "result":0,
     * "msg":"换机成功!"
     * }
     * @returns Está função temo como retorno o resultado da operação.
     */
    updateOSS(newSerialNumber: string, oldSerialNumber: string, time: string): Promise<Growatt.UpdateOSSResponse>
} 
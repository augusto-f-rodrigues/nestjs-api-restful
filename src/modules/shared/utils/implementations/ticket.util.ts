import { Injectable, Logger } from '@nestjs/common';
import { ITicketUtil } from '../interfaces/iticket.util';

/**
 * Provedor de serviços para o Ticket
 * @decorator `@Injectable()`
 */
@Injectable()
export class TicketUtil implements ITicketUtil {
  /**
   * Instanciando um logger
   */
  protected logger = new Logger(TicketUtil.name);

  /**
   *
   * @param customFieldValues Valores customizáveis que são preenchidos no Movidesk
   * @returns Um objeto somente com os valores desejados para realizar a operação de updateOSS
   * @example
   * {
   *  "snFixedAnygrid": "EOAC909003",
   *  "snDamaged": "YIDAA42003",
   *  "dateIngressIntoStock": "2022-12-08T12:59:48.203Z"
   * }
   */
  findFields(customFieldValues: Movidesk.CustomFieldValue[]): Ticket.Return {
    let obj: object = {};
    let fieldFound: object = [];
    const fieldsToBeFound = [
      { id: 92408, value: 'snDamaged' },
      { id: 103454, value: 'snFixedAnygrid' },
      { id: 122405, value: 'snFixedTha' },
      { id: 116301, value: 'dateIngressIntoStock' },
    ];

    this.logger.debug('Custom field values', customFieldValues);

    customFieldValues.forEach((element) => {
      fieldsToBeFound.forEach((item) => {
        if (element.customFieldId === item.id) {
          //CHECKING IF THE SIMPLE TEXT FIELDS HAS CONTENT
          if (element?.value != null) {
            fieldFound = { [item.value]: element.value };
          }
          //CHECKING IF THE CHOICE FIELDS HAS CONTENT
          else if (element?.items[0]?.customFieldItem) {
            fieldFound = { [item.value]: element.items[0].customFieldItem };
          }
          //IF VALUE IS NULL ASSIGN EMPTY TO THE PROPERTY
          else if (
            element?.value === null &&
            !element?.items[0]?.customFieldItem
          ) {
            fieldFound = { [item.value]: '' };
          }
          obj = { ...obj, ...fieldFound };
        }
      });
    });
    return obj as Ticket.Return;
  }
}

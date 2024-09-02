import { Component, viewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MaterialModule } from '../material/material.module';
import { CustomExpansionPanelComponent } from '../custom-expansion-panel/custom-expansion-panel.component';
import { CustomExpansionPanel2Component } from "../custom-expansion-panel-2/custom-expansion-panel-2.component";

@Component({
  selector: 'app-option2',
  standalone: true,
  imports: [MaterialModule, CustomExpansionPanelComponent, CustomExpansionPanel2Component],
  templateUrl: './option2.component.html',
  styleUrl: './option2.component.scss'
})
export class Option2Component {
  title = 'menu';
  accordion = viewChild.required(MatAccordion);
  public modules = [
    {
      title: 'Clientes',
      subModule: [
        {
          title: 'Parametros Clientes',
          routes: [
            {
              title: 'Tipos Basicos Cliente'
            },
            {
              title: 'Parametrización Home'
            },
            {
              title: 'Calidades Tributarios'
            }
          ]
        },
        {
          title: 'Procesos Clientes',
          routes: [
            {
              title: 'Clientes Restringidos'
            },
            {
              title: 'Datos B Clientes'
            },
            {
              title: 'Cambio de Estado de Clientes'
            },
            {
              title: 'Actualización Clientes'
            }
          ]
        },
        {
          title: 'Reportes Clientes',
          routes: [
            {
              title: 'Reportes Generales de Clientes'
            }
          ]
        },
        {
          title: 'Consultas Clientes',
          routes: [
            {
              title: 'Consulta Clientes Restringidos'
            }
          ]
        }
      ]
    },
    {
      title: 'Contabilidad',
      subModule: [
        {
          title: 'Parametros Contables',
          routes: [
            {
              title: 'Tipos Basicos Contables'
            },
            {
              title: 'Conceptos Tributarios'
            },
            {
              title: 'Reglas Contables'
            },
            {
              title: 'Conceptos de Liquidación'
            }
          ]
        },
        {
          title: 'Procesos Contables',
          routes: [
            {
              title: 'Comprobante Contable'
            },
            {
              title: 'Copia de Comprobantes'
            },
            {
              title: 'Anulación de Comprobantes'
            },
            {
              title: 'Cierre Contable'
            }
          ]
        },
        {
          title: 'Consultas Contables',
          routes: [
            {
              title: 'Consulta de Comprobante Contable'
            },
            {
              title: 'Consulta Cuenta Contable'
            },
            {
              title: 'Consulta de Comprobantes'
            },
            {
              title: 'Consulta Terceros'
            }
          ]
        },
        {
          title: 'Reportes de Contabilidad',
          routes: [
            {
              title: 'Reporte de Libro Diario'
            },
            {
              title: 'Reporte Contable De Pagos'
            },
            {
              title: 'Reporte de Balance Comparativo'
            },
            {
              title: 'Reporte de Descuentos IVA'
            },
          ]
        }
      ]
    },
    {
      title: 'Contrato',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Bancos',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Formulador',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Facturación',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Pagaduria',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Cargues',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Cargues Externos',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Pago Impuestos Sociedad',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Administración De Titulos',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
    {
      title: 'Redención de Cuentas',
      subModule: [
        {
          title: 'Parametros Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        },
        {
          title: 'Procesos Contrato',
          routes: [
            {
              title: 'Contratos de validación'
            }
          ]
        }
      ]

    },
  ]
}

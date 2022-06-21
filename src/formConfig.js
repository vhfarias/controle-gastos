export const formConfig = {
  description: {
    type: "text",
    title: "Descrição",
    initialValue: "",
    required: true,
    sanitize: (value) => value.trim(),
    validation: {
      required: {
        value: true,
        message: "Obrigatório",
      },
    }
  },
  amount: {
    type: "text",
    title: "Valor (R$)",
    initialValue: "",
    sanitize: (value) => value.replace(',', '.'),
    validation: {
      required: {
        value: true,
        message: "Obrigatório"
      },
      pattern: {
        value: /[0-9]+[,.]{1}[0-9]{2}/,
        message: "Valor inválido",
      },
    }
  },
  reference: {
    type: "text",
    title: "Referência",
    initialValue: "",
    validation: {
      required: {
        value: false,
        message: "Obrigatório"
      },
      pattern: {
        value: /^([A-z]{3})\/([0-9]{4}|[0-9]{2})\b/g,
        message: "Formato inválido"
      },
      custom: {
        value: (value) => {
          const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
          let m = value.split('/')[0].toLowerCase();
          return (months.indexOf(m) > -1);
        },
        message: "Mês inválido"
      }

    }
  },
  type: {
    type: "radio",
    title: "",
    options: ["Entrada", "Saída"],
    initialValue: "Entrada",
    validation: {
      required: {
        value: true,
        message: "Campo Obrigatório"
      }
    }
  }
}
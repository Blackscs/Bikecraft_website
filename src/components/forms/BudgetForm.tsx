import {
  createForm,
  email,
  maxLength,
  minLength,
  pattern,
  required,
} from "@modular-forms/solid";
import ToggleBox from "components/toggle-buttons/ToggleTermBox.tsx";

type BudgetForm = {
  name: string;
  lastName: string;
  cpf: string;
  email: string;
  cep: string;
  numberHouse: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

function isCpfValid(cpf: string): boolean {
  // Função de validação de CPF (como já fornecida)
  let firstDigitVerifier: string;
  let secondDigitVerifier: string;

  if (cpf.split("").every((char) => char === cpf[0])) {
    return false;
  }

  const cpfBase: string = cpf.substring(0, 9);

  const calculateSum = (cpfPart: string, startMultiplier: number) => {
    let sum = 0;
    let multiplier = startMultiplier;

    for (let i = 0; i < cpfPart.length; i++) {
      sum += Number(cpfPart[i]) * multiplier;
      multiplier--;
    }

    return sum;
  };

  const firstSum = calculateSum(cpfBase, 10);
  firstDigitVerifier = firstSum % 11 >= 10 ? "0" : String(11 - (firstSum % 11));

  const secondSum = calculateSum(cpfBase + firstDigitVerifier, 11);
  secondDigitVerifier =
    secondSum % 11 >= 10 ? "0" : String(11 - (secondSum % 11));

  const verificationDigits: string = firstDigitVerifier + secondDigitVerifier;

  return cpf.substring(9, 11) === verificationDigits;
}

async function checkCep(cep: string): Promise<{ localidade: string }> {
  let dados;

  try {
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    dados = await resposta.json();
  }
  catch (error) {
    console.log(error);
  }
  return dados;
}

export default function BudgetForm() {
  const [_budgetForm, { Form, Field }] = createForm<BudgetForm>();

  return (
    <>
      <Form class="col-span-3 h-full bg-white flex flex-col gap-2 rounded-r-lg px-8 sm:px-28 md:px-10 lg:px-8 py-20 lg:p-20">
        <div id="second-col">
          <div class="flex gap-2 mb-2">
            <img src="/assets/icons/icon_title.svg" alt="icon title" />
            <p class="poppins-semibold text-xs text-gray-700">DADOS PESSOAIS</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2  lg:gap-10">
            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Nome</label>
              <Field
                name="name"
                validate={[
                  required("Este campo é obrigatório."),
                  pattern(
                    /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/,
                    "O nome não corresponde ao formato ideal."
                  ),
                ]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      type="text"
                      class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                      required
                    />
                    {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                  </>
                )}
              </Field>
            </div>

            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Sobrenome</label>
              <Field
                name="lastName"
                validate={[
                  required("Este campo é obrigatório."),
                  pattern(
                    /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/,
                    "O sobrenome não corresponde ao formato ideal."
                  ),
                ]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      type="text"
                      class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                      required
                    />
                    {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                  </>
                )}
              </Field>
            </div>
          </div>

          <div class="flex flex-col w-full poppins-medium text-base">
            <label>CPF</label>
            <Field
              name="cpf"
              validate={[
                required("Este campo é obrigatório."),
                minLength(11, "O CPF deve ter 11 dígitos."),
                (value) => (isCpfValid(String(value)) ? "" : "CPF inválido"),
              ]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    type="text"
                    class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                    placeholder="000.000.000-00"
                    required
                  />
                  {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                </>
              )}
            </Field>
          </div>

          <div class="flex flex-col w-full poppins-medium text-base">
            <label>Email</label>
            <Field
              name="email"
              validate={[
                required("Este campo é obrigatório."),
                email("Email inválido."),
              ]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                    type="email"
                    required
                  />
                  {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                </>
              )}
            </Field>
          </div>

          <div class="flex gap-2 mb-2 mt-10">
            <img src="/assets/icons/icon_title.svg" alt="icon title" />
            <p class="poppins-semibold text-xs text-gray-700">ENTREGA</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
            <div class="flex flex-col w-full poppins-medium text-base">
              <label>CEP</label>
              <Field
                name="cep"
                validate={[
                  required("Este campo é obrigatório."),
                  minLength(8, "Número Inválido."),
                  maxLength(8, "Número Inválido."),
                  async (value): Promise<string> => {
                    return await checkCep(String(value)).then((dados) => {
                      if ("erro" in dados) {
                        return "CEP inválido";
                      } else {
                        return "";
                      }
                    });
                  },
                ]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                      type="text"
                      required
                    />
                    {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                  </>
                )}
              </Field>
            </div>

            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Número</label>
              <Field
                name="numberHouse"
                validate={[
                  required("Este campo é obrigatório."),
                  pattern(/^\d+$/, "Número inválido")
                ]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                      type="text"
                      required
                    />
                    {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                  </>
                )}
              </Field>
            </div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Logradouro</label>
              <Field
                name="street"
                validate={[required("Este campo é obrigatório.")]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                      type="text"
                      required
                    />
                    {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                  </>
                )}
              </Field>
            </div>

            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Bairro</label>
              <Field
                name="neighborhood"
                validate={[required("Este campo é obrigatório.")]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                      type="text"
                      required
                    />
                    {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                  </>
                )}
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Cidade</label>
              <Field
                name="city"
                validate={[
                  required("Este campo é obrigatório."),
                  pattern(/^[\p{L}]+$/u, "Formato incorreto")
                ]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                      type="text"
                      required
                    />
                    {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                  </>
                )}
              </Field>
            </div>

            <div class="flex flex-col w-full poppins-medium text-base">
              <label>Estado</label>
              <Field
                name="state"
                validate = {[
                  required("Este campo é obrigatório."),
                  pattern(/^[\p{L}]+$/u, "Formato incorreto")
                ]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      class={`${field.error ? 'border-red-600' : 'border-gray-300'} bg-gray-100 rounded-md focus:ring-0`}
                      type="text"
                      required
                    />
                    {field.error && <div class="text-red-600 text-xs">{field.error}</div>}
                  </>
                )}
              </Field>
            </div>
          </div>

          <div>
            <div class="flex gap-2 py-2">
              <ToggleBox />
              <span class="roboto-medium text-gray-600">
                Li e aceito os <u>termos e condições</u>.
              </span>
            </div>
            <button class="bg-amber-400 px-8 py-4 mt-5 poppins-semibold text-lg rounded-md text-slate-900 hover:opacity-90">
              SELECIONE A SUA
            </button>
          </div>
        </div>
      </Form>
    </>
  );
}

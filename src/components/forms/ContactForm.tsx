import {
  createForm,
  email,
  maxLength,
  minLength,
  pattern,
  required,
} from "@modular-forms/solid";
import Button from "components/Button";

type BudgetForm = {
  name: string;
  email: string;
  telephone: string;
  message: string;
};

export default function ContactForm() {
  const [_budgetForm, { Form, Field }] = createForm<BudgetForm>();

  return (
    <>
      <Form class="col-span-3 h-full bg-white flex flex-col gap-2 rounded-r-lg">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10">
          <div class="flex flex-col w-full poppins-medium text-base">
            <label>Nome</label>
            <Field
              name="name"
              validate={[
                required("Este campo é obrigatório."),
                pattern(
                  /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/,
                  "Não corresponde ao formato ideal."
                ),
              ]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    type="text"
                    class={`${
                      field.error ? "border-red-600" : "border-gray-300"
                    } bg-gray-100 rounded-md focus:ring-0`}
                    required
                  />
                  {field.error && (
                    <div class="text-red-600 text-xs">{field.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>

          <div class="flex flex-col w-full poppins-medium text-base">
            <label>Telefone</label>
            <Field
              name="telephone"
              validate={[
                required("Este campo é obrigatório."),
                minLength(11, "Número Inválido."),
                maxLength(11, "Número Inválido."),
              ]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    class={`${
                      field.error ? "border-red-600" : "border-gray-300"
                    } bg-gray-100 rounded-md focus:ring-0`}
                    type="text"
                    required
                  />
                  {field.error && (
                    <div class="text-red-600 text-xs">{field.error}</div>
                  )}
                </>
              )}
            </Field>
          </div>
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
                  class={`${
                    field.error ? "border-red-600" : "border-gray-300"
                  } bg-gray-100 rounded-md focus:ring-0`}
                  type="email"
                  required
                />
                {field.error && (
                  <div class="text-red-600 text-xs">{field.error}</div>
                )}
              </>
            )}
          </Field>
        </div>
        <div class="flex flex-col w-full poppins-medium text-base">
          <label>Mensagem</label>
          <Field
            name="message"
            validate={[
              required("Este campo é obrigatório."),
            ]}
          >
            {(field, props) => (
              <>
                <textarea
                  {...props}
                  class={`${
                    field.error ? "border-red-600" : "border-gray-300"
                  } bg-gray-100 rounded-md focus:ring-0 border-gray-200 h-40 outline-none max-h-96 min-h-32`}
                  required
                />
                {field.error && (
                  <div class="text-red-600 text-xs">{field.error}</div>
                )}
              </>
            )}
          </Field>
        </div>
        <div>
          <Button color="gold">ENVIAR MENSAGEM</Button>
        </div>
      </Form>
    </>
  );
}

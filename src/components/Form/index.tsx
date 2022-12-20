import { useState } from "react";
import Client from "../../core/Client";
import { Button } from "../Button";
import { Entry } from "../Entry";

interface FormInterface {
  client?: Client;
  cancel?: () => void,
  clientChange?: (client: Client) => void
}
export const Form = ({ client, cancel, clientChange }: FormInterface) => {
  const [name, setName] = useState<string>(client?.name ?? '' );
  const [age, setAge] = useState<number>(client?.age ?? 0);
  const id = client?.id;
  return (
    <div>
      {id ? <Entry text="Código" type="text" value={id} onlyReading/> : false}{" "}
      <Entry text="Nome" type="text" value={name} handleChange={setName}/>
      <Entry text="Idade" type="number" value={age} handleChange={setAge}/>
      <div className="mt-7 flex justify-end">
        <Button col="blue" className="mr-2" onClick={() => clientChange?.(new Client(name, id, age))}>
            {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={cancel}>
            Cancelar
        </Button>
      </div>
    </div>
  );
};

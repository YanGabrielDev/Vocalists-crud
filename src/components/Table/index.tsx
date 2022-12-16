import Client from "../../core/Client";
import { Edit, Trash } from "../../assets/Icons";

interface TableInterface {
  clients: Client[];
  clientSelect?: (client: Client) => void;
  clientDelet?: (client: Client) => void;
}
export const Table = ({
  clients,
  clientDelet,
  clientSelect,
}: TableInterface) => {
  const showButtons = clientDelet || clientSelect
  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showButtons ? (<th className="p-4">Ações</th>) : false}
      </tr>
    );
  };

  const renderData = () => {
    return clients?.map((client, index) => {
      return (
        <tr
          key={client.id}
          className={`
         ${index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"}
        `}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showButtons ? renderActions(client) : false}
        </tr>
      );
    });
  };
  const renderActions = (client: Client) => {
    return (
      <td className="flex justify-center items-center p-4">
        {clientSelect ? (
          <button
           onClick={() => clientSelect(client)}
            className={`flex justify-center items-center text-green-600 rounded-full p-2 hover:bg-blue-50`}
          >
            {Edit}
          </button>
        ) : (
          false
        )}
        {clientDelet ? (
          <button
            onClick={() => clientDelet(client)}
            className={`
            flex justify-center items-center text-red-600 rounded-full p-2 hover:bg-blue-50
        `}
          >
            {Trash}
          </button>
        ) : (
          false
        )}
      </td>
    );
  };
  return (
    <table className="w-full rounded-md overflow-hidden">
      <thead
        className={`
     text-gray-100 bg-gradient-to-r from-blue-600 to-blue-900
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};

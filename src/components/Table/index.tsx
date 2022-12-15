
import Client from "../../core/Client";
import {Edit, Trash} from '../../assets/Icons'

interface TableInterface {
  clients: Client[];
}
export const Table = ({ clients }: TableInterface) => {
  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-4">Ações</th>
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
          {renderActions(client)}
        </tr>
      );
    });
  };
  const renderActions = (client: Client) => {
    return (
      <td>
        <button className="flex justify-center items-center text-red-500">
          {Trash}
        </button>
        <button>
          {Edit}
        </button>
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

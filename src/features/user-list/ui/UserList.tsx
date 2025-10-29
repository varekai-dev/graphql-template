import { useUserStore } from "@entities/user";
import { Button } from "@shared/ui/Button";

export const UserList = () => {
  const { users, selectedUser, setSelectedUser, removeUser } = useUserStore();

  const handleUserClick = (user: (typeof users)[0]) => {
    setSelectedUser(user);
  };

  const handleRemoveUser = (userId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    removeUser(userId);
  };

  if (users.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        <p>No users available</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <button
              type="button"
              className={`w-full text-left p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedUser?.id === user.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => {
                handleUserClick(user);
              }}
              aria-pressed={selectedUser?.id === user.id}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(event) => {
                    handleRemoveUser(user.id, event);
                  }}
                  aria-label={`Remove user ${user.name}`}
                >
                  Remove
                </Button>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

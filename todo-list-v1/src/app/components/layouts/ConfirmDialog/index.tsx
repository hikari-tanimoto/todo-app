export const ConfirmDialog = ({}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        className="bg-white p-4 rounded-lg"
      >
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this item?</p>
        <div
          className="flex justify-end gap-2"
        >
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
interface Props {
  onSubmit: (formData: FormData) => void;
}

export function CreateAlertForm({ onSubmit }: Props) {
  return (
    <form
      action={onSubmit}
      className="flex flex-col p-4 rounded-lg gap-1 bg-gray-100"
    >
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        className="bg-white border-amber-500 text-black"
      />
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        name="description"
        type="text"
        className="bg-white border-amber-500 text-black"
      />
      <span className="flex flex-row gap-1">
        <input id="viewDetails" name="viewDetails" type="radio" value={1} />
        <label htmlFor="wiewDetails">Have view details button</label>
      </span>
      <span className="flex flex-row gap-1">
        <input
          id="doNotViewDetails"
          name="viewDetails"
          type="radio"
          value={0}
        />
        <label htmlFor="wiewDetails">Do not have view details button</label>
      </span>

      <button
        type="submit"
        className="
          w-fit
          rounded-lg
          px-3
          py-2
          flex
          flex-row
          items-center
          gap-2
          text-xs
          text-white
          bg-[#DE2C18]
          hover:bg-amber-500
          "
      >
        Add
      </button>
    </form>
  );
}

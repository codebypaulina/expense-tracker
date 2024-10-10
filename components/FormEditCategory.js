import { useRouter } from "next/router";

export default function FormEditCategory() {
  const router = useRouter();

  // Cancel-Button
  function handleCancel() {
    router.back(); // zurück zur vorherigen Seite (nochmal überdenken, ob er nicht lieber Formular clearen soll & zustätzl. X-Button dafür implemetieren)
  }

  return (
    <form>
      <h2>Edit Category</h2>

      <label htmlFor="type">Type:</label>
      <input type="radio" id="income" name="type" value="Income" />
      <label htmlFor="income">Income</label>
      <input type="radio" id="expense" name="type" value="Expense" />
      <label htmlFor="expense">Expense</label>
      <br />

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />

      <label htmlFor="color">Color:</label>
      <input type="color" id="color" name="color" />
      <br />

      <button type="button">Delete</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
}

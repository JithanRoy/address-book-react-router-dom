import {getContacts} from "../contacts.js";

export async function loader() {
  const contacts = await getContacts();
  return {contacts};
}
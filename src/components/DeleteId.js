export const DeleteId = (props, id) => {
  props.contacts.map((contact) => {
    return props.contacts.id !== id;
  });
};

import { v4 as uid } from 'uuid';

const getUniqueId = () => uid().replace('-', '');

export {
  getUniqueId,
};

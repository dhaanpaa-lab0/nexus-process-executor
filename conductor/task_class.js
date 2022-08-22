import { connect } from './mongo';

const database = await connect();

const currentDatabase = database.db();

const getTasksCollection = currentDatabase.collection('tasksToExecute');

const getTasks = async (pipe) => getTasksCollection.aggregate(pipe).toArray();

const getTasksToExecute = async () => getTasks({ $match: { state: 'NEW' } });

export {

  getTasksToExecute,
};

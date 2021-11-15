const httpMocks = require('node-mocks-http');
const ToDoModel = require('../../src/model/todo.model');
const TodoController = require('../../src/controllers/todo');
const newTodo = require('../mock-data/todo');

// Create a mock function
ToDoModel.create = jest.fn();

// Define variables in global scope
let req; let
  res;
let userMockId;
// Runs before every tests
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();

  userMockId = 'mockId';
  req.user = { _id: userMockId };
  req.payload = newTodo;

  ToDoModel.create.mockResolvedValueOnce(newTodo);
});

describe('TodoController.createTodo', () => {
  it('should call TodoModel.create', async () => {
    jest.spyOn(Date, 'now').mockReturnValue(new Date(1587893830000).getTime());
    await TodoController.createTodo(req, res).resolves;
    expect(ToDoModel.create).toBeCalled(); // without mock test args
    expect(ToDoModel.create)
      .toBeCalledWith({ ...newTodo, date: Date.now(), userId: userMockId });
  });

  it('should return 200 response code', () => {
    TodoController.createTodo(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toBe('OK');
  });

  it('should return json body in response', () => {
    TodoController.createTodo(req, res);
    expect(res).toBeInstanceOf(Object);
  });
});

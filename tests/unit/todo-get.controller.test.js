const httpMocks = require('node-mocks-http');
const ToDoModel = require('../../src/model/todo.model');
const TodoController = require('../../src/controllers/todo');
const mockTodo = require('../mock-data/todo');

// Create a mock function
ToDoModel.find = jest.fn();

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
  ToDoModel.find.mockResolvedValueOnce(mockTodo);
});

describe('TodoController.getTodo', () => {
  it('should call TodoModel.find', async () => {
    await TodoController.getTodo(req, res).resolves;
    expect(ToDoModel.find).toBeCalled(); // without mock test args
    expect(ToDoModel.find).toBeCalledWith({ userId: userMockId }); // with mock test args
  });

  it('should return 200 response code', () => {
    TodoController.getTodo(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toBe('OK');
  });

  it('should return json body in response', () => {
    TodoController.getTodo(req, res);
    expect(res).toBeInstanceOf(Object);
  });
});

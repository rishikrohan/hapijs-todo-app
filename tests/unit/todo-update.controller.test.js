const ToDoModel = require('../../src/model/todo.model');
const TodoController = require('../../src/controllers/todo');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mock-data/todo');

// Create a mock function
ToDoModel.findOneAndUpdate = jest.fn();

// Define variables in global scope
let req, res;
let userMockId
let todoMockId
// Runs before every tests
beforeEach(() => {
  delete newTodo.userId;

  req = httpMocks.createRequest();
  res = httpMocks.createResponse();

  userMockId = 'userMockId'  
  req.user = {_id: userMockId}

  todoMockId = 'todoMockId'
  req.params = {id: todoMockId};
  req.payload = newTodo; 

  ToDoModel.findOneAndUpdate.mockResolvedValueOnce(newTodo)
})

describe("TodoController.changeTodo", () => {
  it("should call TodoModel.create", async () => {
    await TodoController.changeTodo(req, res).resolves
    expect(ToDoModel.findOneAndUpdate).toBeCalled(); // without mock test args
    expect(ToDoModel.findOneAndUpdate).toBeCalledWith({_id: todoMockId, userId: userMockId},{...newTodo}); // with mock test args
  });

  it("should return 200 response code", () => {
    TodoController.changeTodo(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toBe("OK");
  });

  it("should return json body in response", () => {
    TodoController.changeTodo(req, res);
    expect(res).toBeInstanceOf(Object);
  });
});
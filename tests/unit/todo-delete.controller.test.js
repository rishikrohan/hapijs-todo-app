const ToDoModel = require('../../src/model/todo.model');
const TodoController = require('../../src/controllers/todo');
const httpMocks = require('node-mocks-http');
const mockTodo = require('../mock-data/todo');

// Create a mock function
ToDoModel.findOneAndDelete = jest.fn();

// Define variables in global scope
let req, res;
let userMockId, todoMockId
// Runs before every tests
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();

  todoMockId = 'todoMockId'
  req.params = {id: todoMockId};

  userMockId = 'mockId'
  req.user = {_id: userMockId}
  ToDoModel.findOneAndDelete.mockResolvedValueOnce(mockTodo)
})

describe("TodoController.deleteTodo", () => {
  it("should call TodoModel.findOneAndDelete", async() => {
    await TodoController.deleteTodo(req, res).resolves
    expect(ToDoModel.findOneAndDelete).toBeCalled(); // without mock test args
    expect(ToDoModel.findOneAndDelete).toBeCalledWith({_id: todoMockId, userId: userMockId}); // with mock test args
  });

  it("should return 200 response code", () => {
    TodoController.deleteTodo(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toBe("OK");
  });

  it("should return json body in response", () => {
    TodoController.deleteTodo(req, res);
    expect(res).toBeInstanceOf(Object);
  });
});
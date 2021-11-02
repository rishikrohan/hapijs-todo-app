const ToDoModel = require('../../src/model/todo.model');
const TodoController = require('../../src/controllers/todo');
const httpMocks = require('node-mocks-http');
const newTodo = require('../../tests/mock-data/new-todo.json');

// Create a mock function
ToDoModel.create = jest.fn();

// Define variables in global scope
let req, res;

// Runs before every tests
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
})

describe("TodoController.createTodo", () => {

  it("should call TodoModel.create", () => {
    req.body = newTodo;
    TodoController.createTodo(req, res);
    expect(ToDoModel.create).toBeCalled(); // without mock test args
    expect(ToDoModel.create).toBeCalledWith(newTodo); // with mock test args
  });

  it("should return 200 response code", () => {
    req.body = newTodo;
    TodoController.createTodo(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toBe("OK");
  });

  it("should return json body in response", () => {
    ToDoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res);
    expect(res).toBeInstanceOf(Object);
  });
});
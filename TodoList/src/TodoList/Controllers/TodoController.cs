using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShiledEnergyTodoList.Model;
using ShiledEnergyTodoList.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ShiledEnergyTodoList.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private ITodoContext _todoContext;

        public TodoController(ITodoContext todoContext)
        {
            _todoContext = todoContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return _todoContext.Todos;
        }

        [HttpPost]
        public async Task<TodoItem> Add([FromBody]TodoItem todoItem)
        {
            _todoContext.Todos.Add(todoItem);
            await _todoContext.SaveChangesAsync();
            return (todoItem);
        }

        [HttpPut]
        public async Task Put([FromBody]TodoItem todo)
        {           
            _todoContext.Todos.Update(todo);
            await _todoContext.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            var todo = _todoContext.Todos.First(x => x.Id == id);
            _todoContext.Todos.Remove(todo);
            await _todoContext.SaveChangesAsync();
        }
    }
}

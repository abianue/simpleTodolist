using Microsoft.EntityFrameworkCore;
using ShiledEnergyTodoList.Model;

namespace ShiledEnergyTodoList.Data
{
    public class TodoContext : DbContext, ITodoContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            :base(options)
        {
        }

        public DbSet<TodoItem> Todos { get; set; }
    }
}

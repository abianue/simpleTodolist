using Microsoft.EntityFrameworkCore;
using ShiledEnergyTodoList.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace ShiledEnergyTodoList.Data
{
    public interface ITodoContext
    {
        DbSet<TodoItem> Todos { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken));
        int SaveChanges();
    }
}
